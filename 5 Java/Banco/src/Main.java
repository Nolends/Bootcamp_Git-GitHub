public class Main {
    public static void main(String[] args) {
        Conta cc = new CCorente();
        Conta poupanca = new CPoupanca();

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }
}
