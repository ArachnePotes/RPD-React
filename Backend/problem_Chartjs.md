the json format of the data  that its fetch with 
``` await  getChartData(coin_id=2,chart_id=2) ```
this can also be made with the express app at ```"...:8080/chart/:chain/:coin/"```
```python
[
  {
    close_val: 0.00315794,
    volume: 33020.2,
    high: 413490,
    chain_id: 2,
    Liquity: null,
    coin_id: 2,
    date_val: 2023-08-07T18:30:39.000Z
  },
  .
  .
  .
  {
    close_val: 0.00876543,
    volume: 22040.5,
    high: 345678,
    chain_id: 2,
    Liquity: null,
    coin_id: 2,
    date_val: 2023-08-08T10:10:20.000Z
  }
]
```
date_val mapped into rows with var  
```python
Xaxis = data.map((row) => row.date_val);
[
  2023-08-07T18:30:39.000Z,
  2023-08-07T18:30:39.000Z,
  2023-08-07T21:30:59.000Z,
  2023-08-08T00:05:04.000Z,
  2023-08-08T02:40:08.000Z,
  2023-08-08T05:10:12.000Z,
  2023-08-08T07:40:16.000Z,
  2023-08-08T10:10:20.000Z
]
```
close_val mapped into rows with 
```python
Yaxis = data.map((row) => row.close_val); 
[
  0.00315794, 0.00315794,
  0.0123457,  0.0054321,
  0.00654321, 0.00345678,
  0.00234567, 0.00876543
]
```

```javascript
// in chart js 
(async function() {
  const data = out_data//this part doesnot execute internaly 

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.date_val),
        datasets: [
          {
            label: 'close by year',
            data: data.map(row => row.close_val)
          }
        ]
      }
    }
  );
})()
```


```javascript
// the template uses ApexCharts and similar to chart js 

const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartOptions = {
      series: [
        // Yaxis
        {
          name: '2021',
          data: [18, 10, 15, 29, 18, 12, 9]
        },
        {
          name: '2020',
          data: [-13, -18, -9, -14, -5, -17, -15]
        }
      ],
      //... chart configuration
      xaxis: {
        // Xaxis
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
       //... axis decoration
      },
      //... Decoration to the chart
    };
    // chart js includes this part and seems that doesnt display data
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
    totalRevenueChart.render();
  }
```