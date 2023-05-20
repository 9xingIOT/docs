const deviceManage = require("./设备管理");

module.exports = [
  {
    type: "category",
    label: "简介",
    link: { type: "doc", id: "云平台/README" },
    items: [],
  },
  deviceManage,
];
