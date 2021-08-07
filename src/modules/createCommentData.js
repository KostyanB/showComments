import validInputs from "./validInputs";
import showResultMessage from "./showResultMessage";
import sendComment from "./sendComment";

// получение данных формы
const createCommentData = () => {
    const form = document.forms.comments;
    const formData = new FormData(form);

    if (validInputs(formData)) {
        const comment = {};
        for (const [ name, value ] of formData) {
            comment[name] = value;
        }
        sendComment(comment);
    } else {
        showResultMessage(false, 'Неправильно заполнены поля');
    }
};

export default createCommentData;