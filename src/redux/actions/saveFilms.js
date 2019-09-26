export const type = 'saveFilms';


const saveFilms = films => {
    return {
        type,
        payload: films,
    };
};

export default saveFilms;