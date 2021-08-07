// получение базы комментариев
const getCommentsDb = callback => {

    const getBase = async () => {
        const data = await fetch('db/getDb.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (data.ok) {
            return data.json();
        } else {
            throw new Error(`Данные не получены, ошибка ${data.status} ${data.statusText}`);
        }
    }

    getBase()
        .then(data => {
            callback(data);
        })
        .catch(err => {
            callback();
            console.warn(err)
        });
};
export default getCommentsDb;