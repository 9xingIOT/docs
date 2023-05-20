const summary = require("./summary");
const jx802 = require("./JX-802");
const jx901 = require("./JX-901");

// module.exports = {
//   type: "docSidebar",
//   label: "产品手册",
//   sidebarId: "manualSidebar",
//   position: "left",
// //   link: { type: "doc", id: "产品手册/README" },
//   items: [jx802, jx901],
// };

module.exports = [summary, jx802, jx901];
