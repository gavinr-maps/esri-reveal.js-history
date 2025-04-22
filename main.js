var base = ""; // useful for dev only - this should be empty string when checked in; https://gavinr.github.io/esri-reveal.js-history/
var app = new Vue({
  el: "#app",
  data: {
    iframes: [
      {
        url: `${base}uc-2025/uc-2025.html`,
        label: "UC 2025",
      }, {
        url: `${base}dev-summit-2025/dev-2025.html`,
        label: "Developer & Technology Summit 2025",
      }, {
        url: `${base}fed-2025/fed-2025.html`,
        label: "Federal GIS Conference 2025",
      }, {
        url: `${base}uc-2024/uc-2024.html`,
        label: "UC 2024",
      }, {
        url: `${base}dev-summit-2024/dev-summit-2024.html`,
        label: "Dev Summit 2024",
      }, {
        url: `${base}fed-2024/fed-gis-2024.html`,
        label: "Federal GIS Conference 2024",
      },
      {
        url: `${base}uc-2023/uc-2023.html`,
        label: "UC 2023",
      },
      {
        url: `${base}dev-summit-2023/dev-summit-2023.html`,
        label: "Dev Summit 2023",
      },
      {
        url: `${base}fed-2023/fed-gis-2023.html`,
        label: "Federal GIS Conference 2023",
      },
      {
        url: `${base}uc-2022/uc-2022-technical-workshops.html`,
        label: "UC 2022",
      },
      {
        url: `${base}dev-summit-2022/dev-summit-2022.html`,
        label: "Dev Summit 2022",
      },
      {
        url: `${base}dev-summit-2022/fed-gis-2022.html`,
        label: "Federal GIS Conference 2022",
      },
      {
        url: `${base}uc-2021/uc-2021-tech-session.html`,
        label: "UC 2021",
      },
      {
        url: `${base}dev-summit-2021/dev-summit-2021.html`,
        label: "Dev Summit 2021",
      },
      {
        url: `${base}uc-2020/uc-2020-user-presentation.html`,
        label: "UC 2020",
      },
      {
        url: `${base}dev-summit-2020/devsummit-2020.html`,
        label: "Dev Summit 2020",
      },
      { url: `${base}uc-2019/uc-2019.html`, label: "UC 2019" },
      {
        url: `${base}dev-summit-2019/devsummit-2019.html`,
        label: "Dev Summit 2019",
      },
      { url: `${base}dev-summit-2018/index.html`, label: "Dev Summit 2018" },
      { url: `${base}fed-uc-2018/feduc-2018.html`, label: "Fed UC 2018" },
      { url: `${base}dev-summit-2017/index.html`, label: "Dev Summit 2017" },
      { url: `${base}dev-summit-2016/index.html`, label: "Dev Summit 2016" },
    ],
  },
});
