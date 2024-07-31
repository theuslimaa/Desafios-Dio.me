namespace AbstraindoCelular.Models
{
    public class IPhone : Smartphone
    {
        public IPhone(string numero, string modelo, string imei, string memoria)
        : base(numero, modelo, imei, memoria)
        {

        }
        public override void InstalarAplicacao(string nomeApp)
        {
            Console.WriteLine($"Instalando o aplicativo {nomeApp}");
            Console.WriteLine("Aplicativo instalado com sucesso no seu iOS 14.");
        }
    }
}
