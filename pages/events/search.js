import qs from 'qs'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import {API_URL} from '@/config/index'

// getServerSideProps runs every time we come to the page
// getStaticProps makes request at build time and builds out static pages
// drawback is that if there are updates or changes they won't render 
// revalidate is workaround - checks for updates

export async function getServerSideProps({query:{term}}) {
  const query = qs.stringify({
      _where: {
          _or: [
            {name_contains: term},
            {performers_contains: term},
            {description_contains: term},
            {venue_contains: term}
          ]
      }
  })
  
  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()

  // have to pass to the client here
  return {
    props: {events},
  }

}

// and pass in as a prop here
export default function SearchPage({ events }) {
  const router = useRouter()

  return (
    <Layout title='Search Results'>
      <Link href='/events'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt}/>
      ))}
    </Layout>
  )
}

