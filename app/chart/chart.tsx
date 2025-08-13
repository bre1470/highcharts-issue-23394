import Highcharts from 'highcharts/esm/highcharts.js';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/esm/modules/accessibility.js';

'use client';

export function Chart() {
    const baseConfig: Highcharts.Options = {
        accessibility: {
            enabled: true,
        }
    };
    const mergedConfig = Highcharts.merge(baseConfig, {
        series: [{
            data: [1, 2, 3]
        }]
    });
    const chartId = Math.random().toString();

    return (
        <HighchartsReact
            highcharts={Highcharts}
            id={chartId}
            options={mergedConfig}
        />
    );
}
