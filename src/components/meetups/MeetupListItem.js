import { useContext } from 'react'
import Styles from './MeetupListItem.module.css'
import Card from '../ui/Card'
import FavoriteContext from '../../store/favorites-context'
const MeetupListItem = (props) => {

    const favoriteCtx = useContext(FavoriteContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatus = () => {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                address: props.address,
                image: props.image,
            })
        }
    }

    return (
        <li className={Styles.item}>
            <Card>
                <div className={Styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={Styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={Styles.actions}>
                    <button onClick={toggleFavoriteStatus}>{itemIsFavorite ? 'Remove Favorite' : 'To Favorite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupListItem;