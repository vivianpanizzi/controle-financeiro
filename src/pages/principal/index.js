import React, { Component } from "react";
import "./index.css";
import GraficoPizza from "../../components/Graficos/pizza";
import GraficoFluxoCaixa from "../../components/Graficos/linha";

export default class Principal extends Component {
    render() {
        const dados = localStorage.getItem('transactions');
        const transactionsList = dados ? JSON.parse(dados) : [];

        const totalDespesas = transactionsList
            .filter((item) => item.expense)
            .reduce((acc, cur) => acc + Number(cur.amount), 0);

        const totalEntrada = transactionsList
            .filter((item) => !item.expense)
            .reduce((acc, cur) => acc + Number(cur.amount), 0);

            let accumulatedTotal = 0;
        const groupedByDate = transactionsList.reduce((acc, transaction) => {
            const date = transaction.data;
            if (!acc[date]) {
                acc[date] = { entrada: 0, expense: 0, total: 0 };
            }

            if (transaction.expense) {
                acc[date].expense += Number(transaction.amount);
            } else {
                acc[date].entrada += Number(transaction.amount);
            }

            accumulatedTotal += transaction.expense
                ? -Number(transaction.amount)
                : Number(transaction.amount);

            acc[date].total = accumulatedTotal;

            return acc;
        }, {});

            const dadosGrafico = Object.keys(groupedByDate).map((date) => ({
            data: date,
            totalEntrada: groupedByDate[date].entrada,
            totalDespesas: groupedByDate[date].expense,
            diferenca: groupedByDate[date].total,
        }));

        return (
            <>
                <div className="titulo">
                    <h1>Controle Financeiro</h1>
                </div>

                <div className="grafico-container">
                    <GraficoFluxoCaixa dados={dadosGrafico} />
                    <GraficoPizza entrada={totalEntrada} expenses={totalDespesas} />
                </div>

            </>
        );
    }
}
