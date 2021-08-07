
const normalizeInputs = target => {

    // Корректировка ФИО
    if (target.name === 'name') {
        target.value = target.value.replace(/\s+/g, ' ');
        let nameData = target.value.trim().split(' '),
            userName = '';
        nameData.forEach(item => {
            userName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
        });
        target.value = (userName !== ' ') ? userName.trim() : '';
    }
    // Корректировка пробелов др. знаков в поле Комментарий
    if (target.name === 'comment') {
        const changeSymbol = [' ', '-', ',', ';', ':', '.'],
            changeReg = [/\s+/gm, /-+/gm, /,+/gm, /;+/gm, /:+/gm, /\.+/gm];
        changeSymbol.forEach((item, i) => {
            target.value = target.value.replace(changeReg[i], item);
        });
        target.value = (target.value !== ' ') ? target.value : '';
    }

};
export default normalizeInputs;