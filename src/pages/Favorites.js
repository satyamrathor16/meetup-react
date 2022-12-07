import { useContext } from 'react'
import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";
import MeetupList from '../components/meetups/MeetupList';
import FavoriteContext from '../store/favorites-context'
const Favorites = () => {

    const favoriteCtx = useContext(FavoriteContext);

    let content;

    if (favoriteCtx.totalFavorite == 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return (
        <Layout>
            <h1>Favorites</h1>
            {content}
        </Layout>
    )
}

export default Favorites;