import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
    return (
        <div>
            <Sparklines width={180} height={120} data={data}>
                <SparklinesLine color={color} />
            </Sparklines>
        </div>
    );
};

export default Chart;
