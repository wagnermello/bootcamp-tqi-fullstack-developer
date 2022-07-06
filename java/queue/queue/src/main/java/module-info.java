module com.digitalinnovation.queue {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.digitalinnovation.queue to javafx.fxml;
    exports com.digitalinnovation.queue;
}