import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        favoriteMovies: JSON.parse(sessionStorage.getItem('favoriteMovies')) || [],
        watchedMovies: JSON.parse(sessionStorage.getItem('watchedMovies')) || []
    }),
    actions: {
        addToFavoriteMovies(data) {
            const currentData = {
                ...data,
                isFavorite: true
            }
            this.favoriteMovies.push(currentData);
            sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
        },
        deleteFromFavoriteMovies(id) {
            const updatedFavoriteMovies = this.favoriteMovies.filter(movie => movie.imdbID !== id);
            this.favoriteMovies = updatedFavoriteMovies;
            sessionStorage.setItem('favoriteMovies', JSON.stringify(updatedFavoriteMovies));
        },
        addToWatchedMovies(data) {
            const currentData = {
                ...data,
                isWatched: true
            }
            this.watchedMovies.push(currentData);
            sessionStorage.setItem('watchedMovies', JSON.stringify(this.watchedMovies));
        },
        deleteFromWatchedMovies(id) {
            const updatedWatchedMovies = this.watchedMovies.filter(movie => movie.imdbID !== id);
            this.watchedMovies = updatedWatchedMovies;
            sessionStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));
        },
        async getMoviesBySearch(searchQuery) {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=647f01ec`);
            return response.json();
        }
    },
    getters: {
        getWatchedMovies(store) {
            return store.watchedMovies;
        },
        getFavoriteMovies(store){
            return store.favoriteMovies;
        }
    }
});
