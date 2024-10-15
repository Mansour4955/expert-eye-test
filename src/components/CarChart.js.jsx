import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const CarChart = ({versions}) => {

    const data = {
        labels: versions.map(version => version.name),
        datasets: [{
            label: 'Price in USD',
            data: versions.map(version => version.price),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price in USD'
                }
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Car Versions and Prices',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CarChart;
