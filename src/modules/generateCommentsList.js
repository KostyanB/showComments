
const generateCommentsList = data => {
    const commnetsWrapper = document.querySelector('.commnets-wrapper');

    const list = data.reduce((html, { id, name, email, comment }) => {
        const evenMark = (id % 2 === 0) ? ' even' : '';
        return (
        html + `
            <div class="comment">
                <div class="comment__name${evenMark}">${name}</div>
                <div class="comment__email${evenMark}">${email}</div>
                <div class="comment__text">${comment}</div>
            </div>
        `);
    },'')
    commnetsWrapper.innerHTML = list;

}
export default generateCommentsList;