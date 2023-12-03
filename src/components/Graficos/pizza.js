import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraficoPizza = ({ entrada, expenses }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
        chartRef.current.destroy();
        }

        const ctx = document.getElementById('pieChart').getContext('2d');

        chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Entrada', 'Saídas'],
            datasets: [
            {
                data: [entrada, expenses],
                backgroundColor: ['#00ACC1', '#EC407A'],
            },
            ],
        },
        });
    }, [entrada, expenses]);

    return (
        <div className="pizza">
            <h2>Gráfico de Pizza - Entradas e Saídas</h2>
            <canvas id="pieChart"></canvas>
        </div>
    );
};

export default GraficoPizza;
