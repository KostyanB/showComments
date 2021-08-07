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
    $sql = "SELECT * FROM comments";
    mysqli_set_charset($sql, "utf8");
    $result = mysqli_query($con, $sql);

    if ($result === false) {
        echo('Не выполнен запрос');
    } else {
        $arr = array();
        while($row = mysqli_fetch_assoc($result)){
            $arr[] = $row;
        }
        echo json_encode($arr);
    }
}
?>