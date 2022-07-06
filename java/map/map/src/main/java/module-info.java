module com.digitalinnovation.map {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.digitalinnovation.map to javafx.fxml;
    exports com.digitalinnovation.map;
}