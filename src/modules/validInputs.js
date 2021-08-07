
const validInputs = data => {
    const form = document.forms.comments;
    // const formData = new FormData(form);
    const correctBase = {
        correctName: true,
        correctMail: true,
        correctComment: true,
    };

    const showError = elem => elem.classList.add('novalid');
    const showOk = elem => elem.classList.remove('novalid');

    const setError = (target, correct) => {
        correctBase[correct] = false;
        showError(target);
    }

    const setOk = (target, correct) => {
        correctBase[correct] = true;
        showOk(target);
    }

    for (const [name, value] of data) {
        console.log('skjah');
		if (name === 'name') {
            (value === '' || value.length < 3) ?
                setError(form[name], 'correctName') :
                    setOk(form[name], 'correctName');
        }

        if (name === 'email') {
            const correctMail = /^[\w\-\.\!\~\*\']+@[\w\-\.\!\~\*\']+(\.[a-z]{2,})$/;
            (!(correctMail.test(value))) ?
                setError(form[name], 'correctMail') :
                    setOk(form[name], 'correctMail');
        }

        if (name === 'comment') {
            (value === '') ?
                setError(form[name], 'correctComment') :
                    setOk(form[name], 'correctComment');
		}
	}
	return Object.values(correctBase).every(item => item);
};
export default validInputs;