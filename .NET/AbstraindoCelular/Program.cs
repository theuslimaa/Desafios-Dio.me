using AbstraindoCelular.Models;

//Realizar os testes com as classes Nokia e iPhone
Console.WriteLine("Smartphone Nokia");
Smartphone nokia = new Nokia(numero: "9000", modelo: "5050-B", imei: "1111-KL", memoria: "256");
nokia.Ligar();
nokia.InstalarAplicacao("Alura");
nokia.Desligar();

Console.WriteLine("DADOS DO PROXIMO APARELHO.");

Console.WriteLine("\n");

Console.WriteLine("Smartphone iPhone");
Smartphone iphone = new IPhone(numero: "2024-999PTBR", modelo: "APPLE-PROMAX", imei: "4060-ERG", memoria: "512");
iphone.Ligar();
iphone.InstalarAplicacao("Youtube");
nokia.Desligar();

Console.WriteLine("FIM DO PROGRAMA.");
