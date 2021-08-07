
const getComments = callback => {
    const getCommentsBase = async () => {
        const data = await fetch('db/db.json');
        if (data.ok) {
            return data.json();
        } else {
            throw new Error(`Данные не получены, ошибка ${data.status} ${data.statusText}`);
        }
    }

    getCommentsBase()
        .then(data => callback(data))
        .catch(err => {
            callback();
            console.warn(err)
        });
};
export default getComments;