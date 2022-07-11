package heranca;

public class RodarAplicacao {
    public static void main(String[] args) {

        Funcionario funcionario = new Funcionario();

        Funcionario gerente = new Gerente(); //upcast
        Funcionario vendedor = new Vendedor(); //upcast
        Funcionario faxineiro = new Faxineiro(); //upcast

        //Funcionario vendedor_ = (Vendedor) new Funcionario(); //downcast não é recomendado utilizar
    }


}
