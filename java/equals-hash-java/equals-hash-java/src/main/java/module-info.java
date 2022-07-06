module com.example.equalshashjava {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.equalshashjava to javafx.fxml;
    exports com.example.equalshashjava;
}