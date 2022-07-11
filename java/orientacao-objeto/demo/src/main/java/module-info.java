module dio.orientacaoobjeto.demo {
    requires javafx.controls;
    requires javafx.fxml;


    opens dio.orientacaoobjeto.demo to javafx.fxml;
    exports dio.orientacaoobjeto.demo;
}