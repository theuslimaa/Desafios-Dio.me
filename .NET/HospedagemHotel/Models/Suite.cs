using System;
using Models;

namespace Models
{
    public class Suite 
    {
        public Suite(string tiposuite, int capacidade, decimal valorDiaria)
        {
            TipoSuite = tiposuite;
            Capacidade = capacidade;
            ValorDiaria = valorDiaria;
        }
        public string? TipoSuite { get; set;}
        public int Capacidade { get; set;}
        public decimal ValorDiaria { get; set;}

    }
}