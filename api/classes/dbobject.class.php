<?php

    /**
     * DbObject class
     * 
     * @author    Edin Kahvedžić <edin@coffeedzic.com>
     * @version   1.0.0
     */

    class DbObject {
        
        /**
         * Get properties from class $db_table_fields
         * If properties exists escape them and put in $properties array
         * 
         * @return array
         */

        protected function properties() {
            $database = Database::instance();
            $properties = array();
            foreach (static::$db_table_fields as $db_field) {        
                if(property_exists($this, $db_field)) {        
                    $properties[$db_field] = $this->$db_field;
                    $properties[$db_field] = $database->escape($properties[$db_field]);        
                }        
            }        
            return $properties;        
        }

        /**
         * Create or update object
         * 
         * @return mixed Returns last insret ID or false
         */

        public function save() {
            return isset($this->id) ? $this->update() : $this->create();
        }

        /**
         * Insert new row into database
         * 
         * @return mixed Returns last insert ID or false
         */

        public function create() {
            $database = Database::instance();
            $properties = $this->properties();
            $sql = "INSERT INTO " . static::$db_table . "(" . implode(",", array_keys($properties)) . ") ";
		    $sql .= "VALUES ('". implode("','", array_values($properties)) ."')";
            if($database->query($sql)) {
                $this->id = $database->lastID();    
                return $this->id;    
            } else {    
                return false;  
            }
        }

        /**
         * Updates current row if row id exists
         * 
         * @return void
         */

        public function update() {
            $database = Database::instance(); 
            $properties = $this->properties();    
            foreach ($properties as $key => $value) {
                $properties_pairs[] = "{$key}='{$value}'";
            }    
            $sql = "UPDATE  " .static::$db_table . "  SET ";
            $sql .= implode(", ", $properties_pairs);
            $sql .= " WHERE id= " . $database->escape($this->id);    
            $database->query($sql);    
            return (mysqli_affected_rows($database->connection) == 1) ? true : false;       
        }

        /**
         * Deletes current row if row id exists
         * 
         * @return void
         */

        public function delete() {
            $database = Database::instance();  			
            $properties = $this->properties();
			$sql = "DELETE FROM  " .static::$db_table . "  ";
			$sql .= "WHERE id = '" . $database->escape($this->id);
			$sql .= "' LIMIT 1";
			$database->query($sql);
			return (mysqli_affected_rows($database->connection) == 1) ? true : false;
		}

        /**
         * Method to find row by id
         * 
         * @param [int] $id
         * 
         * @return array
         */

        public static function findById($id) {
            $database = Database::instance();
            $sql = "SELECT * FROM " . static::$db_table . " WHERE id = $id";
            $result = $database->query($sql);
            if($result->num_rows == 1) {
                $result = $result->fetch_assoc();
                return $result;
            } else {
                var_dump($result);
                //die('Invalid query!');
            }            
        }

        /**
         * Method to count all rows in table
         * 
         * @return int
         */

        public static function countAll() {
            $database = Database::instance();
            $sql = "SELECT COUNT(*) FROM " . static::$db_table;
            $result = $database->query($sql);
            return $result->num_rows;
        }

        /**
         * Method to find where column name is equal to arg
         * 
         * @param $arg
         * @param [string] $column_name
         * @param [bool] $array
         * 
         * @return void
         */

        public static function findIt($arg, $column_name, $array = false) {
            $database = Database::instance();
            $sql = "SELECT * FROM " . static::$db_table . " WHERE " . $column_name . " = '" . $arg . "'";
            $result = $database->query($sql);
            if($array == false && $result->num_rows >= 1) {
                return $result = $result->fetch_assoc();
            } else if($array == true && $result->num_rows >= 1) {
                return $result;
            } else {
                return false;
            }
        }

        /**
         * Method to find all in table
         * 
         * @param [int] $id
         * 
         * @return array
         */

        public static function findAll() {
            $database = Database::instance();
            $sql = "SELECT * FROM " . self::$db_table;
            $result = $database->query($sql);
            if($result->num_rows > 1) {
                return $result;
            } else {
                return false;
            }            
        }

    }

?>