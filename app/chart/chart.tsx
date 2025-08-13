import Highcharts from 'highcharts/esm/highcharts.js';
import 'highcharts/esm/modules/accessibility.js';
import HighchartsReact from 'highcharts-react-official';

'use client'; // <-- Important to force chart rendering in web browser

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
