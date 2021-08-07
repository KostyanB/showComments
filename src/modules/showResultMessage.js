
const showResultMessage = (status, text) => {
    const userFormMessage = document.querySelector('.user-form__message');

    const showMessage = (val, res) => {
        userFormMessage.textContent = val;
        userFormMessage.classList.add(res);
        setTimeout(() => {
            userFormMessage.textContent = '';
            userFormMessage.classList.remove(res);
        }, 3000);
    };

    (status) ? showMessage(text, 'success') : showMessage(text, 'error');
};
export default showResultMessage;