import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraficoFluxoCaixa = ({ dados }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('fluxoCaixaChart').getContext('2d');

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dados.map(item => item.data),
                datasets: [
                    {
                        label: 'Total',
                        borderColor: '#00ACC1',
                        data: dados.map(item => item.diferenca),
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,  
                    },
                },
            },
        });
    }, [dados]);

    return (
        <div className="linha">
            <h2>Fluxo de Caixa</h2>
            <canvas id="fluxoCaixaChart"></canvas>
        </div>
    );
};

export default GraficoFluxoCaixa;


