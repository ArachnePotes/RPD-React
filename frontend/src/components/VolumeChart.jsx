import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'dark' ? 'hsl(229, 70%, 50%)' : 'hsl(97, 70%, 50%)';

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/chart/games/category/mapped');
        const data = await response.json();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveBar
      data={chartData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors,
            },
          },
          legend: {
            text: {
              fill: colors,
            },
          },
          ticks: {
            line: {
              stroke: colors,
              strokeWidth: 1,
            },
            text: {
              fill: colors,
            },
          },
        },
        legends: {
          text: {
            fill: colors,
          },
        },
      }}
      keys={['y']}
      indexBy="x"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -25,
        legend: isDashboard ? undefined : 'categories',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in category: ' + e.indexValue;
      }}
    />
  );
};

export default BarChart;
