using System;
using Microsoft.VisualBasic;
using Models;

namespace Models
{
    public class Reserva
    {
        public List<Pessoa> Hospedes = new List<Pessoa>();
        public Suite Suite { get; set; }
        public int DiasReservados { get; set; } 
        public Reserva () { }
        public Reserva (int diasReservados)
        {
            DiasReservados = diasReservados;
        }

        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            //Verificar se a capacidade é maior ou igual ao numero de hóspedes
            if (Suite?.Capacidade >= hospedes.Count)
            {
                Hospedes = hospedes;
            }
            //Retornar exceção caso a capacidade seja menor que o número de hóspedes recebido
            else
            {
                throw new Exception ("Capacidade menor que o número de hóspedes");
            }
        }
        public void CadastrarSuite(Suite suite)
        {
            Suite = suite;
        }
        public int QuantidadeHospedes()
        {
            //Retorna a quantidade de hóspedes
            return Hospedes.Count;
        }
        public decimal CalcularValorDiaria()
        {
            //Retorna o valor da díaria
            decimal valor = DiasReservados * Suite.ValorDiaria;
            //Caso os dias forem maior ou igual a 10, dar desconto de 10%
            if (DiasReservados >= 10)
            {
                valor -= Decimal.Divide(Decimal.Multiply(valor, 10), 100);
            }
            return valor;
        }
    }
}