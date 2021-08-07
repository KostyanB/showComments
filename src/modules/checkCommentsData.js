import showResultMessage from './showResultMessage';
import generateCommentsList from './generateCommentsList';
// проверка наличия комментов
const checkCommentsData = data => {
    const mainHeader = document.querySelector('.main-wrap__header');
    if (!data) {
        const message = 'Ошибка сервера';
        showResultMessage(false, message);
    } else if (data && data.length === 0) {
        mainHeader.textContent = 'На сервере нет комментариев';
    } else {
        generateCommentsList(data);
        mainHeader.textContent = 'Выводим комментарии';
    }
};
export default checkCommentsData;