import java.util.Scanner;

public class Contador {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite o primeiro parâmetro");
		int parametroUm = scan.nextInt();
		System.out.println("Digite o segundo parâmetro");
		int parametroDois = scan.nextInt();
		
		try {
			contar(parametroUm, parametroDois);
		
		}catch (ParameterException exception) {
			System.out.println("O segundo parametro deve ser maior que o primeiro");
		}

        scan.close();
		
	}
	static void contar(int parametroUm, int parametroDois ) throws ParameterException {
		if(parametroUm > parametroDois)
            throw new ParameterException();
		
		int contagem = parametroDois - parametroUm;
		for(int i = 1; i <= contagem; i++){
            System.out.println("Imprimindo o numero " + i);
        }
	}
}