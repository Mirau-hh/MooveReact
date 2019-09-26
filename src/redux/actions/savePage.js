export const type = 'savePage';


const savePage = page => {
    return {
        type,
        payload: page,
    };
};

export default savePage;