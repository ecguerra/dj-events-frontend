import Layout from '@/components/Layout'
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
export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  )
}
