import { Chart } from "react-google-charts";

export const data = [
    ["Month", "Veteranos", "Novatos"],
  ["01/04/2023", 15, 13],
  ["02/04/2023", 18, 12],
  ["03/04/2023", 18, 15],
  ["04/04/2023", 16, 15],
];

export const options = {
  title: "Evolução cancelamento",
    curveType: "function",
    backgroundColor: '#393646',
    hAxis: {
        textStyle: {
            color: "#FFFFFF",
        },
    },
    vAxis: {
        textStyle: {
            color: "#FFFFFF",
        },
    },
    series: { // Cor dos indicadores por indice
      0: {
        color: '#644EA0', 
        },
        1: {
        color: '#2CAC9F',
      },
    },
    legend: { position: "bottom" },
    titleTextStyle: {
        color: "#FFFFFF",
    },legendTextStyle: {
        color: "#FFFFFF",
    }
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
          options={options}
    
    />
  );
}