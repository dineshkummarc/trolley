trolley.init();
trolley.body(6, 10, true).box(18, 1);
var b1 = trolley.body(15, 20).circle(2).body;
var b2 = trolley.body(13, 10).circle(2).body;
var b3 = trolley.body(17, 10).circle(2).body;
trolley.joint(b1, 1, 1, b2, 1, 1);
trolley.joint(b1, 1, 1, b3, 1, 1);
