<?php
    /**
     * Trivia ReactJS
     * Score class
     *
     * @author    Edin Kahvedžić <edin@coffeedzic.com>
     * @version   1.0.0
     */

    class Score extends DbObject {
        /**
         * Database table name variable
         * 
         * @var string
         */

        protected static $db_table = 'score';

        /**
         * Database table fields array
         * 
         * @var array
         */

        protected static $db_table_fields = array('name', 'correct_answers', 'score');

        /**
         * Unique ID variable for our table rows
         * 
         * @var int
         */

        public $id;

        /**
         * Variable that contains name of the user
         * 
         * @var string
         */

        public $name;

        /**
         * Variable that contains # of correct answers
         * 
         * @var string
         */

        public $correct_answers;

        /**
         * Variable that contains score
         * 
         * @var int
         */

        public $score;

        /**
         * Constructor which assign our values to our variables
         * @param array $args
         */

        public function __construct($args) {
            if(isset($args['id'])) { $this->id = $args['id']; }
            $this->name = $args['name'];
            $this->correct_answers = $args['correct_answers'];
            $this->score = $args['score'];
        }

        /**
         * Method to get all data from score table sorted by score and correct_answers
         * 
         * @return void
         */

        public static function getRanking() {
            $database = Database::instance();
            $sql = "SELECT * FROM " . static::$db_table . " ORDER BY score DESC, correct_answers DESC";
            $result = $database->query($sql);
            if($result->num_rows > 0) {
                return $result;
            } else {
                return false;
            }      
        }
        
    }
?>