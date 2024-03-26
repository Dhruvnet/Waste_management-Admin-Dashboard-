// Daily Traffic Dashboards Default

export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30, 22, 15, 12],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18", "20","22","25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Consumption Users Reports

export const barChartDataConsumption = [
  {
    name: "Medical",
    data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 15, 20, 25, 30],
    // Data for medical waste collected from February 17th to March 17th
  },
  {
    name: "Biodegradable",
    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 10],
    // Data for biodegradable waste collected from February 17th to March 17th
  },
  {
    name: "E-waste",
    data: [80, 90, 85, 88, 92, 95, 100, 105, 110, 108, 106, 103, 102, 99, 97, 95, 93, 91, 89, 87, 85, 83, 81, 80, 78, 76, 74, 72, 70],
    // Data for e-waste collected from February 17th to March 17th
  },
  {
    name: "Recyclable",
    data: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20],
    // Data for recyclable waste collected from February 17th to March 17th
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: [
      "Feb 17", "Feb 18", "Feb 19", "Feb 20", "Feb 21", "Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26",
      "Feb 27", "Feb 28", "Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9",
      "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17"
    ],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },
  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  },
  legend: {
    show: false,
  },
  colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      columnWidth: "30px",
    },
  },
};



// pie chart 

export const pieChartOptions = {
  labels: ["Recyclable", "Medical", "Biodegradable", "E-waste"],
  colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  chart: {
    width: "100%", // Adjusted width to 100% for a larger chart
    height: "400px", // Adjusted height to 400px for a larger chart
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [30, 20, 25, 25];


// Total Spent Default

export const lineChartDataTotalSpent = [
  {
    name: "Rates",
    data: [50, 64, 48, 49, 66, 68, 89.45, 72, 75, 80, 82, 90],
  }
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["APR", "MAY", "JUN", "JUL", "AUG", "SEPT", 'OCT', "NOV", "DEC", "JAN", "FEB", "MAR"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};


// line chart for recycling rates over past 6 months 

export const lineChartOptions = {
  chart: {
    width: "100%",
    height: "300px",
  },
  colors: ["#3182CE"], // Color for the line
  legend: {
    show: true,
    labels: {
      colors: "#ffffff", // Color for legend labels
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    labels: {
      style: {
        colors: "#ffffff", // Color for x-axis labels
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#ffffff", // Color for y-axis labels
      },
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const lineChartData = [
  {
    name: "Recycling Rate",
    data: [50, 55, 60, 65, 70, 75], // Sample data for recycling rates over 6 months
  },
];


// resiurces 
export const resoutcespieChartOptions = {
  labels: ["Running", "Idle", "Stopped", "Ready", ],
  colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  chart: {
    width: "100%", // Adjusted width to 100% for a larger chart
    height: "400px", // Adjusted height to 400px for a larger chart
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#AB9EFF", "#5846CC", "#4287f5"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const resourcespieChartData = [5, 25, 20, 50];


//resources 


export const resourcesbarChartDataDailyTraffic = [
  {
    name: "Daily collection analysis ",
    data: [20, 30, 40, 20, 45, 50],
  },
];

export const resourcessbarChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["02", "04", "08", "12", "14", "16", "18", "20", "22", "24"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};