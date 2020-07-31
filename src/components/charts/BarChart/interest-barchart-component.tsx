import * as React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,122,0.2)',
            borderColor: 'rgba(255,99,111,.1.1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,123,0.2)',
            hoverBorderColor: 'rgba(255,99,112,1.1)',
            data: [75, 79, 85, 88, 66, 85, 45]
        }
    ]
};

export default class InterestBarChart extends React.Component {
    displayName: 'BarExample';

    render() {
        return (
            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar
                    data={data}
                    options={{
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        );
    }
}
