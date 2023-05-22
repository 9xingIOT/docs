const quickStart = require('./快速上手')
const deviceManage = require("./设备管理");
const cameraManage = require('./摄像头管理')

module.exports = [
  {
    type: "category",
    label: "简介",
    link: { type: "doc", id: "云平台/README" },
    items: [],
  },
  quickStart,
  deviceManage,
  cameraManage
];
