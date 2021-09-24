import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import {API_URL} from '@/config/index'

// getServerSideProps runs every time we come to the page
// getStaticProps makes request at build time and builds out static pages
// drawback is that if there are updates or changes they won't render 
// revalidate is workaround - checks for updates

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  // have to pass to the client here
  return {
    props: {events},
    revalidate: 1
  }

}

// and pass in as a prop here
export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt}/>
      ))}
    </Layout>
  )
}

