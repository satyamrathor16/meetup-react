import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Styles from './MainNavigation.module.css'
import FavoriteContext from '../../store/favorites-context'
const MainNavigation = () => {

    const favoriteCtx = useContext(FavoriteContext);

    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>All Meetups</Link>
                    </li>
                    <li>
                        <Link to={'/new-meetup'}>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to={'/favorites'}>
                            Favorites
                            <span className={Styles.badge}>{favoriteCtx.totalFavorite}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;