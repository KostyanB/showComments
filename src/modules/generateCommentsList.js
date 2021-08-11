
const generateCommentsList = data => {
    const commnetsWrapper = document.querySelector('.commnets-wrapper');

    const list = data.reduce((html, { name, email, comment }) => (
        html + `
            <div class="comment">
                <div class="comment__name">${name}</div>
                <div class="comment__email">${email}</div>
                <div class="comment__text">${comment}</div>
            </div>
        `),'');
    commnetsWrapper.innerHTML = list;

}
export default generateCommentsList;