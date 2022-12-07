import MeetupListItem from './MeetupListItem'
import Styles from './MeetupList.module.css'
const MeetupList = (props) => {
    return (
        <ul className={Styles.list}>
            {props.meetups.map((item) => {
                return (
                    <MeetupListItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        address={item.address}
                        description={item.description}
                    />
                )
            })}
        </ul>
    );
}

export default MeetupList