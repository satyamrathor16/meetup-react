import { useState, useEffect } from 'react'
import MainNavigation from "../components/layout/MainNavigation";
import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [meetupData, setMeetupData] = useState([])

    useEffect(() => {
        fetch('https://react-getting-start-10f2d-default-rtdb.firebaseio.com/meetups.json',)
            .then((response) => response.json())
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                // console.log(data);
                setIsLoading(false)
                setMeetupData(meetups)
            })
    }, [])

    if (isLoading) {
        return (
            <section>
                <h1>All Meetups</h1>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <Layout>
            {/* <MainNavigation /> */}
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={meetupData} />
            </section>
        </Layout>
    )
}

export default AllMeetups;