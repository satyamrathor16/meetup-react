import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate, redirect } from 'react-router-dom'


const NewMeetup = () => {
    const navigation = useNavigate()
    const NewMeetupHandler = (data) => {
        // console.log(data);
        fetch('https://react-getting-start-10f2d-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigation(-1)
                // redirect('/')
            })
    }

    return (
        <Layout>
            <NewMeetupForm AddNewMeetup={NewMeetupHandler} />
        </Layout>
    )
}

export default NewMeetup;