<?php
$user = 'root';
$password = 'root';
$db = 'hh_test';
$host = 'localhost';
$port = 3306;

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$con = mysqli_connect($host, $user, $password, $db, $port);

if ($con == false) {
    echo ('Невозможно подключиться к БД' . mysqli_connect_error());
} else {
    $json = file_get_contents('php://input');
    $val = json_decode($json, true);
    // $val = json_decode($_POST);
    $sql = "INSERT INTO comments (name, email, comment)  VALUES ('$val[name]', '$val[email]', '$val[comment]')";
    mysqli_set_charset($sql, "utf8");
    $result = mysqli_query($con, $sql);

    if ($result === false) {
        echo('Не выполнен запрос');
    } else {
        echo('OK');
    }
}
?>