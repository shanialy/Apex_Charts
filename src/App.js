import React from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

function App() {

  return (
    <>
      <h4>Average Engagement by Network</h4>
      <Chart
        type="bar"
        width={600}
        height={400}
        series={[
          {
            data: [235, 10, 2],
          },
        ]}
        options={{
          chart: {
            height: 350,
            type: "bar",
            events: {
              click: function (chart, w, e) {},
            },
          },
          colors: ["#4169E1", "#FF0000", "#66C7F4"],
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 47,
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: [["Facebook"], ["Reddit"], ["Pinterest"]],
            labels: {
              style: {
                colors: ["#000000"],
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            title: {
              text: "Number Of Engagements",
            },
          },
        }}
      ></Chart>
      <br />
      <br />
      <br />
      {/* <Chart
        type="line"
        width={600}
        height={600}
        series={[
          {
            name: "Column A",
            type: "column",
            data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
          },
          {
            name: "Column B",
            type: "column",
            data: [10, 19, 27, 26, 34, 35, 40, 38],
          },
          {
            name: "Line C",
            type: "line",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          },
        ]}
        options={{
          chart: {
            stacked: false,
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            followCursor: true,
          },
          colors: ["#99C2A2", "#C5EDAC", "#66C7F4"],
          stroke: {
            width: [4, 4, 4],
          },
          plotOptions: {
            bar: {
              columnWidth: "20%",
            },
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              seriesName: "Column A",
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: "Columns",
              },
            },
            {
              seriesName: "Column A",
              show: false,
            },
            {
              opposite: true,
              seriesName: "Line C",
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: "Line",
              },
            },
          ],
          tooltip: {
            shared: false,
            intersect: true,
            x: {
              show: false,
            },
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40,
          },
        }}
      ></Chart>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      /> */}
      <h4>Articles Published Over Time and Engagement</h4>
      <Chart
        type="bar"
        width={1330}
        height={400}
        series={[
          {
            name: "X",
            type: "bar",
            data: [
              21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5, 21.1, 23, 33.1, 34,
              44.1, 44.9, 56.5, 50.5, 56.5, 50.5, 21.1, 23, 33.1, 34, 21.1, 23,
              33.1, 34, 44.1, 44.9, 56.5, 50.5, 21.1, 44.9, 56.5, 50.5, 21.1,
              23, 44.9, 56.5, 58.5, 21.1, 23, 33.1, 34, 21.1, 23, 33.1, 34,
              44.1, 44.9, 44.1,
            ],
          },
          {
            name: "Z",
            type: "line",
            data: [
              1.1, 1.2, 1.5, 1.5, 2.5, 2.6, 1.9, 3.2, 1.4, 2, 2.5, 1.5, 2.5,
              2.8, 3.0, 3.0, 1.4, 2, 2.5, 1.5, 0.5, 0.8, 1.4, 2, 2.5, 1.5, 2.5,
              2.8, 1.4, 2, 2.5, 1.5, 2.5, 2.8, 1.4, 2, 1.5, 2.5, 2.8, 1.4, 0.5,
              0.8, 1.4, 2, 2.5, 1.4, 2, 1.5, 2.5, 1.8,
            ],
          },
        ]}
        options={{
          chart: {
            stacked: false,
            width: "100%",
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            followCursor: true,
          },
          colors: ["#4169E1", "#808080"],
          stroke: {
            width: [4, 4, 4],
          },
          plotOptions: {
            bar: {
              columnWidth: "30%",
              borderRadius: 2,
            },
          },
          xaxis: {
            categories: [
              "25Jan",
              "1Feb",
              "3Feb",
              "15Feb",
              "22Feb",
              "1Mar",
              "8Mar",
              "15Mar",
              "22Mar",
            ],
          },
          yaxis: [
            {
              seriesName: "Column A",
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: "Average Number Of Engagements",
              },
            },
            {
              seriesName: "Column A",
              show: false,
            },
            {
              opposite: true,
              seriesName: "Line C",
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: "Number Of Articles Published",
              },
            },
          ],
          tooltip: {
            shared: false,
            intersect: true,
            x: {
              show: false,
            },
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40,
          },
        }}
      ></Chart>

      {/* <h1>Area Chart</h1>
      <Chart
        type="bar"
        width={1300}
        height={600}
        series={[
          {
            name: "A",
            data: [100, 100, 129, 232, 332, 122],
          },
          {
            name: "B",
            data: [100, 200, 299, 332, 132, 122],
          },
          {
            name: "C",
            data: [300, 400, 200, 134, 323, 33],
          },
          {
            name: "D",
            data: [303, 190, 199, 220, 320, 22],
          },
        ]}
        
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            stacked: true,
          },
          tooltip: {
            followCursor: true,
          },
          dataLabels: {
            formatter: (val) => {
              return `$${val}`;
            },
          },
          xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `$${val}`;
              },
            },
          },
        }}
      >
      </Chart> */}
      {/* <br />
      <h1>Pie Chart</h1>
      <Chart
        type="linecolumn"
        width={600}
        height={600}
        series={[304, 313, 434, 104, 333, 944]}
        options={{
          labels: ["jan", "feb", "march", "april", "may", "june"],
          tooltip: {
            y: {
              formatter: (val) => {
                return `$${val}`;
              },
            },
          },
        }}
      ></Chart>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
        }}
      > */}

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* <h1>*************************************************************************************</h1>

        <br />
        <h2>React ApexCharts</h2>
        <br />
        <h1>Area Chart</h1>
        <br />
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
        <br />
        <h1>Bar Chart</h1>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
        <br />
        <h1>Line Chart</h1>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
      <br /> */}
    </>
  );
}

export default App;
