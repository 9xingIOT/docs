const quickStart = require("./快速上手");
const deviceManage = require("./设备管理");
const cameraManage = require("./摄像头管理");
const dataCenter = require("./数据中心");
const monitor = require("./监控大屏");
const alarmManager = require("./报警管理");
const milestone = require('./发展历程')

module.exports = [
  {
    type: "category",
    label: "简介",
    link: { type: "doc", id: "云平台/README" },
    items: [],
  },
  quickStart,
  deviceManage,
  cameraManage,
  dataCenter,
  monitor,
  alarmManager,
  milestone
];
