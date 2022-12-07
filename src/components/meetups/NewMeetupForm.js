import { useRef } from 'react'
import Card from '../ui/Card'
import Styles from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
    const titleRef = useRef()
    const imageRef = useRef()
    const addressref = useRef()
    const descriptionRef = useRef()

    const onSubmitForm = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const address = addressref.current.value;
        const description = descriptionRef.current.value;

        const data = {
            title: title,
            image: image,
            address: address,
            description: description
        }
        // console.log(data);
        props.AddNewMeetup(data);

    }

    return (
        <Card>
            <form className={Styles.form} onSubmit={onSubmitForm}>
                <div className={Styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type={'text'} id='title' required ref={titleRef} />
                </div>
                <div className={Styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type={'url'} id='image' required ref={imageRef} />
                </div>
                <div className={Styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type={'text'} id='address' required ref={addressref} />
                </div>
                <div className={Styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows={5} ref={descriptionRef}></textarea>
                </div>
                <div className={Styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;