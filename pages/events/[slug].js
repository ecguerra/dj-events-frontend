import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'

export default function EventPage({evt}) {
    return (
        <Layout>
            <h1>{evt.name}</h1>
        </Layout>
    )
}

// since these are not set urls, we have to use getStaticPaths
export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }))

    return {
        paths,
        fallback: true
    }
}


// this won't work on its own in this case - needs getStaticPaths
export async function getStaticProps({ params: {slug} }) {
    const res = await fetch(`${API_URL}/api/events/${slug}`)

    const events = await res.json()

    return {
        props: {
            evt: events[0]
        },
        revalidate: 1
    }
}

// // example using getServerSideProps

// export async function getServerSideProps({ query: {slug} }) {
//     const res = await fetch(`${API_URL}/api/events/${slug}`)

//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0]
//         },
//     }
// }