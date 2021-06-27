<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
    
    require('classes/database.class.php');
    require('classes/dbobject.class.php');
    require('classes/score.class.php');
    
    $data = json_decode(file_get_contents("php://input"), true);
    if($data['api'] == 'coffeedzic') {
        $args['name'] = $data['name'];
        $args['correct_answers'] = $data['correct_answers'];
        $args['score'] = $data['score'];

        $result = new Score($args);
        $result->save();
    }
?>