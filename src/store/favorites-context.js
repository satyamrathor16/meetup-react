import { createContext, useState } from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorite: 0,
    addFavorite: (meetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { },
});

export const FavoritesContextProvider = (props) => {

    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler = (meetup) => {
        setUserFavorites(prevMeetup => prevMeetup.concat(meetup))
    }

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites(prevMeetup => prevMeetup.filter(item => item.id !== meetupId))
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorite: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;