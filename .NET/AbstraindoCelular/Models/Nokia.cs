namespace AbstraindoCelular.Models
{
    public class Nokia : Smartphone
    {
        public Nokia(string numero, string modelo, string imei, string memoria)
        : base(numero, modelo, imei, memoria)
        {

        }
        public override void InstalarAplicacao(string nomeApp)
        {
            Console.WriteLine($"Instalando o aplicativo {nomeApp}");
            Console.WriteLine("Aplicativo instalado com sucesso no seu Android 14.");
        }
    }
}