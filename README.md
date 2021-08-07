# "ShowComment"

Тестовое задание

## О приложениии

Демо [ShowComment]().
Приложение выводит на страницу комментарии пользователей.

* База данных комментариев хранится на сервере.
* Комментарии отображаются на странице в порядке добавления пользователями.
* Разный стиль четных/нечетных комментариев.
* Ограничение количества вводимых символов - имя и email 30 символов, комментарий 200.
* Ввод в поля по маске и нормализация введенных данных. Символы маски в модуле maskInputs.js.
* В поле Имя ввод только букв кириллицы. После ввода первые буквы заменяются на заглавные. Допускается ввод нескольких слов. Имя длиной меньше 3 букв - не корректно.
* В поле Email ввод только букв латинского алфавита, цифр и ряда символов ( . ! ~ * ' ).
* В поле Комментарий кириллица, цифры, знаки препинания, пробелы. Нормализация - удаление нескольких пробелов, тире, знаков препинания подряд.
* Все поля ввода при отправке проходят валидацию на корректность заполнения и "не пустоту"
* Уведомление пользователя: не правильное заполнение, успешная/ошибочная отправка комментария, отсутствие связи с сервером.
* Отправка на сервер без перезагрузки страницы.

## Стек технологий

* Модульная структура скриптов;
* Сборка webpack;
* Обмен данными с сервером Ajax, fetch-api, PHP, MySQL.

***
Eng
## "3dGLO" site of GLO Academy

Test task

## About App

Demo [ShowComment]().

The application displays user comments on the page.

* Comment database is stored on the server.
* Comments are displayed on page in order they were added by users.
* Different style of even / odd comments.
* Limitation of number of entered characters - name and email 30 characters, comment 200.
* Input into fields by mask and normalization of entered data. Mask symbols in the 'maskInputs.js' module.
* In Name field, enter only Cyrillic letters. After entering, first letters are replaced with capital letters. Multiple words are allowed. A name less than 3 letters long is not correct.
* In Email field, enter only letters of Latin alphabet, numbers and symbols (.! ~ * ').
* In Comment field, Cyrillic, numbers, punctuation marks, spaces. Normalization - removal of multiple spaces, dashes, punctuation marks in a row.
* When sending, all input fields are validated for correctness of filling and "not empty"
* User notification: incorrect filling, successful / error sending of a comment, no connection with the server.
* Submitting to the server without reloading the page.

## Technology stack

* Modular structure of scripts /src;
* Build webpack;
* Data exchange with server Ajax, fetch-api, PHP, MySQL;