 <?php

    /**
     * Database Class
     *
     * @author    Edin Kahvedžić <edin@coffeedzic.com>
     * @version   1.0.0
     */

    class Database {

        /**
         * Variables which holds database hostname, username, password, name and port
         * 
         * @var string
         */

        private $database_host = 'localhost';
        private $database_user = 'username';
        private $database_password = 'password';
        private $database_name = 'db_name';
        private $port = '';

        /**
         * Variable connection
         * 
         * @var Database
         */

        public $connection;

        /**
         * Variable which holds charset
         * 
         * @var string
         */

        private $charset = 'UTF-8';

        /**
         * Static instance of self
         * 
         * @var Database
         */

        private static $instance;

        /**
         * Constructor which connects to database
         * 
         */

        public function __construct() {
            $this->openConnection();
        }

        /**
         * A method to connect to database then set charset
         * 
         * @return void
         */

        public function openConnection() {
            $this->connection = new mysqli($this->database_host, $this->database_user, $this->database_password, $this->database_name);
            if($this->connection->connect_errno) {
                die('Connection failed: ' . $this->connection->connect_error);
            }
            $this->connection->set_charset($this->charset);
        }

        /**
         * A method of returning the static instance to allow access to the
         * instantiated object from within another class.
         * 
         * @return Database
         */
        
        public static function instance() {			
			if(!self::$instance) { 				
				self::$instance = new self();
			}
			return self::$instance;
		}

        /**
         * Magic method clone is empty to prevent duplication of connection
         */

        private function __clone() {}

        /**
         * Method to get mysqli connection
         */

        public function connect() {
            return $this->connection;    
        }

        /**
         * A method to preform query
         * 
         * @param string $sql Contains an user-provided sql query
         * 
         * @return array Contain returned row from the query
         */

        public function query($sql) {
            $result = $this->connection->query($sql);
            $this->confirmQuery($result);
            return $result;
        }

        /**
         * A private method to check if query fails
         * 
         * @param string $result Contain provided sql query
         * 
         * @return void
         */

        private function confirmQuery($result) {
            if(!$result) {
                die('Query failed: ' . $this->connection->connect_error);
            }
        }

        /**
         * A method to escape harmful characters from a query
         * 
         * @param string $string The string to escape
         * 
         * @return string The escaped string
         */

        public function escape($string) {
            $escaped = $this->connection->real_escape_string($string);
            return $escaped;
        }

        /**
         * A method to get last inserted id
         * 
         * @return int Last inserted id
         */

        public function lastID() {
            return $this->connection->insert_id;
        }

    }

?>