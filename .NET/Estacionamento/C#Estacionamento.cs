using System.Security.Cryptography.X509Certificates;
class Estacionamento
{
    static void Main()
    {
        Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        Console.WriteLine("Seja bem vindo ao sistema de estacionamento TheusHub!");
        Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

        Console.WriteLine("Digite o preço inicial:");
        //Converte para inteiro utilizando o ReadLine
        int pi = int.Parse(Console.ReadLine()!);
        Console.WriteLine("Agora digite o preço por hora:");
        int ph = int.Parse(Console.ReadLine()!);
        //Lista aonde vai ficar os veiculos caso sejam adicionados
        List<string> veiculosNoPatio = new List<string>();

        //Loop para caso o usuario digite algo invalido
        bool estacionamentoAberto = true;
        while (estacionamentoAberto)
        {
            //Pede para o usuario digitar uma opção
            Console.WriteLine(@"Digite a sua opção:
            1 - Cadastrar veículo
            2 - Remover veículo
            3 - Listar veículos
            4 - Encerrar ");
            //Le a opção e verifica se ela é nula ou vazia e lê apenas o primeiro caractere da string
            string opcao = Console.ReadLine()!;
            if (!string.IsNullOrEmpty(opcao) && opcao.Length > 0)
            {
                if (opcao[0] == '1')
                {
                    //Pede para o usuario digitar o veículo
                    Console.WriteLine("Digite o veículo para estacionar:");
                    string placaCarro = Console.ReadLine()!;
                    //Verifica se já possui algum veículo com os mesmos digitos na lista
                    if (veiculosNoPatio.Any(x => x.Equals(placaCarro.ToUpper())))
                    {
                        Console.WriteLine("Já existe um veículo com esta placa estacionado aqui no pátio");
                    }
                    //Caso não há, executa o código abaixo
                    else
                    {
                        veiculosNoPatio.Add(placaCarro);
                        Console.WriteLine("Veículo adicionado com sucesso.");
                        Console.WriteLine("Pressione Enter para continuar.");
                        ConsoleKeyInfo confirmar = Console.ReadKey();
                        continue;   
                    }
                }
                else if (opcao[0] == '2')
                {
                    Console.WriteLine("Digite a placa do veículo para remover:");
                    string placaCarro = Console.ReadLine()!;

                    //Verifica se o veículo já esta na lista
                    if (veiculosNoPatio.Any(y => y.ToUpper() == placaCarro.ToUpper()))
                    {
                        Console.WriteLine("Digite a quantidade de horas que o veículo permaneceu estacionado:");
                        int tempo = Console.Read();

                        decimal valorPago = pi + ph * tempo;

                        veiculosNoPatio.Remove(placaCarro.ToUpper());
                        Console.WriteLine($"O veículo {placaCarro} foi removido e o valor a ser pago é de {valorPago}");
                        Console.WriteLine("Pressione Enter para continuar.");
                        ConsoleKeyInfo confirmar = Console.ReadKey();
                    }
                    //Caso não esteja
                    else
                    {
                        Console.WriteLine("Desculpe, este veículo não está estacionado neste pátio.");
                        Console.WriteLine("Pressione Enter para continuar.");
                        ConsoleKeyInfo confirmar = Console.ReadKey();
                    }

                }
                else if (opcao[0] == '3')
                {
                    //Verifica todos os itens da lista veiculosNoPatio
                    if (veiculosNoPatio.Any())
                    {
                        Console.WriteLine("Os veículos estacionados aqui no pátio são:");
                        //Utilizo o foreach para percorrer toda a lista e exibi-la
                        foreach (var v in veiculosNoPatio)
                        {
                            Console.WriteLine(v);
                        }
                        Console.WriteLine("Pressione Enter para continuar.");
                        ConsoleKeyInfo confirmar = Console.ReadKey();
                    }
                    //Caso não tenha cadastrado nenhum
                    else
                    {
                        Console.WriteLine("Não há veículos estacionados aqui. Verifique se você o adicionou ao patio.");
                    }
                }
                //Encerra o loop e exibe a mensagem final
                else if (opcao[0] == '4')
                {
                    Console.WriteLine("Muito obrigado por utilizar o sistema de estacionamento da TheusHub, tenha um excelente dia!");
                    estacionamentoAberto = false;
                }
                //Aqui está o propósito de eu ter criado o loop no começo
                else 
                {
                    Console.WriteLine("Entrada invalida, tente novamente.");
                    continue;
                }
            }
        }
        Console.WriteLine("Fim do programa.");
    }    
}
