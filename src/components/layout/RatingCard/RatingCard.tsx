import React from 'react';
import cls from './RatingCard.module.scss'
import Plot from 'react-plotly.js';
import {Typography} from "@mui/material";

const RatingCard = () => {
    const data = [
        {
            x: [
                '2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01',
                '2023-06-01', '2023-07-01', '2023-08-01', '2023-09-01', '2023-10-01',
                '2023-11-01', '2023-12-01'
            ],
            y: [55, 57, 54, 20, 58, 55, 33, 52, 36, 56, 65, 55],
            type: 'scatter',
            mode: 'lines+markers',
            fill: 'tozeroy',
            marker: { color: '#38C972' },
        },
    ];

    const layout = {
        xaxis: {
            tickformat: '%Y-%m',
        },

        autosize: true,
        margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 4
        },
    };

    return (
        <div className={cls.card}>
            <Typography variant={'h3'} c sx={{fontWeight: 500}}>
                Рейтинг организации
            </Typography>
            <Plot
                data={data}
                layout={layout}
                style={{ width: '100%', height: '160px' }}
            />
            <div className={cls.rating}>
                <Typography variant={'h4'} className={cls.subtitle}>
                    Рейтинг: Очень высокий
                </Typography>
                <p>
                    Спортсмены организации показывают достаточно хорошие результаты на тренировках и соревнованиях, а также за последний стабильно поднимаются в рейтинге.
                </p>
            </div>
        </div>
    );
};

export default RatingCard;