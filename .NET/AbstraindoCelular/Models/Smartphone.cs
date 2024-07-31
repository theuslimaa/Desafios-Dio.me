namespace AbstraindoCelular.Models
{
    public abstract class Smartphone
    {
        public string Numero { get; set;}
        public string Modelo { get; set;}
        public string IMEI { get; set;}
        public string Memoria { get; set;}

        public Smartphone(string numero, string modelo, string imei, string memoria)
        {
            Numero = numero;
            Modelo = modelo;
            IMEI = imei;
            Memoria = memoria;
        }
        public void Ligar()
        {
            Console.WriteLine("Ligando...");
        }
        public void ReceberLigacao()
        {
            Console.WriteLine("Recebendo ligação....");
        }
        public void Desligar()
        {
            Console.WriteLine("Desligando...");
        }

        public abstract void InstalarAplicacao(string nomeApp);
    }
    
}