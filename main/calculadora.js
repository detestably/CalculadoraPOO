/**
 * Classe que simula uma calculadora elementar com operações de soma e subtração.
 */
public class CalculadoraElementar {
    // Atributos
    private double valor1;
    private double valor2;

    /**
     * Construtor da classe CalculadoraElementar.
     * 
     * @param valor1 Primeiro valor para as operações.
     * @param valor2 Segundo valor para as operações.
     */
    public CalculadoraElementar(double valor1, double valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    /**
     * Realiza a operação de soma entre valor1 e valor2.
     * 
     * @return O resultado da soma.
     */
    public double somar() {
        return valor1 + valor2;
    }

    /**
     * Realiza a operação de subtração entre valor1 e valor2.
     * 
     * @return O resultado da subtração.
     */
    public double subtrair() {
        return valor1 - valor2;
    }

    /**
     * Método principal para testar a classe CalculadoraElementar.
     * 
     * @param args Argumentos da linha de comando (não utilizados).
     */
    public static void main(String[] args) {
        // Criando uma instância da calculadora com valores 10 e 5
        CalculadoraElementar calculadora = new CalculadoraElementar(10, 5);

        // Realizando e exibindo as operações
        System.out.println("Resultado da soma: " + calculadora.somar());
        System.out.println("Resultado da subtração: " + calculadora.subtrair());
    }
}
