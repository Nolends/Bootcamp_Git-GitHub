public abstract class Conta implements IConta {

    private static int SEQUENCIAL = 1;
    protected static final int AGENCIA_PADRAO = 0001;
    protected int agencia;

    protected int numero;
    protected double saldo;


    public int Conta() {
        this.agencia = Conta.AGENCIA_PADRAO;
        this.numero = SEQUENCIAL++;


        public int getAgencia() {
            return agencia;
        }

        public int getNumero () {
            return numero;
        }

        public double getSaldo () {
            return (int) saldo;
        }
    }
    protected void imprimirInfosComuns() {
        System.out.println(String.format("Agência: %d", this.agencia));
        System.out.println(String.format("Numero: %d", this.numero));
        System.out.println(String.format("Saldo: %.2f", this.saldo));
    }

    @Override
    public void sacar(double valor) {

    }

    @Override
    public void depositar(double valor) {

    }

    @Override
    public void tranferir(double valor, Conta contaDestino) {

    }

    @Override
    public void imprimirExtrato() {

    }
}
