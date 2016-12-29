import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => Math.round(data.reduce((a, b) => a + b) / data.length);

const Chart = ({ data, color, units }) => {
    return (
        <div>
            <Sparklines width={180} height={120} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    );
};

export default Chart;
