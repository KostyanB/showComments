
const maskInputs = target => {
    // имя
    if (target.name === 'name') {
        target.value = target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '');
    }
    // e-mail
    if (target.name === 'email') {
        target.value = target.value.replace(/[^\w-@\.\!\~\*\'\$]/g, '');
    }
    // сообщение
    if (target.name === 'comment') {
        target.value = target.value.replace(/[^а-яА-ЯёЁ0-9\.\s\-_,:;?!\(\)@"]/gm, '');
    }
};
export default maskInputs;