import './css/style.css';
import handleForm from './modules/handleForm';
import checkCommentsData from './modules/checkCommentsData';
import getCommentsDb from './modules/getCommentsDb';

// управление формой ввода
handleForm();
// получение базы комментов
getCommentsDb(checkCommentsData);