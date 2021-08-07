// import validateForm from "./validateForm";
import maskInputs from "./maskInputs";
import createCommentData from "./createCommentData";
import normalizeInputs from "./normalizeInputs";

const handleForm = () => {
    const userForm = document.querySelector('.user-form'),

    userForm.addEventListener('input', e => maskInputs(e.target));
    userForm.addEventListener('change', e => normalizeInputs(e.target));
    userForm.addEventListener('submit', e => {
        e.preventDefault();
        createCommentData();
    });
};
export default handleForm;