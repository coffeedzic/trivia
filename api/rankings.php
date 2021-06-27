<?php    
    require('classes/database.class.php');
    require('classes/dbobject.class.php');
    require('classes/score.class.php');

    $rankings = Score::getRanking();
    $array = [];
    while($ranking = $rankings->fetch_assoc()) {
        array_push($array, $ranking);
    }
    echo json_encode($array);
?>