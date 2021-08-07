import checkCommentsData from "./checkCommentsData";
import getCommentsDb from "./getCommentsDb";
import showResultMessage from "./showResultMessage";

const sendComment = newComment => {

    const postData = async body => {
        return fetch('db/addDb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };

    postData(newComment)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('Status network not 200');
            }
            showResultMessage(true, 'Успешная отправка');
            document.forms.comments.reset();
        })
        .catch((err) => {
            showResultMessage(false, 'Ошибка отправки');
            console.warn(err);
        })
        .finally(() => getCommentsDb(checkCommentsData));
}

export default sendComment;