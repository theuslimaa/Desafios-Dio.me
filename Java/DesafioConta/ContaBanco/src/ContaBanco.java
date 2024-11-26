import java.util.Scanner;

public class ContaBanco {
    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo a agência do Bradesco aqui em Santo André!!");
        System.out.println("Siga os passos abaixo para criar a sua conta!");
        System.out.println("Numero da conta por favor: ");
        int numero = scanner.nextInt();

        System.out.println("Digite o número da Agência por favor: ");
        scanner.nextLine();
        String agencia = scanner.nextLine();

        System.out.println("O nome do cliente por favor: ");
        String nomeCliente = scanner.nextLine();

        System.out.println("Por favor, o saldo da Conta: ");
        double saldo = scanner.nextDouble();

        System.out.println("Olá" + nomeCliente + ", obrigado por criar sua conta aqui na nossa agência" + agencia + ". Atualmente seu saldo é de" + saldo + "e o numero da sua conta é" + numero);

        scanner.close();

    }
}
