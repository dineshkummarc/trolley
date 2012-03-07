trolley.init();
trolley.body(0, 8, true).box(15, 1);
var b1 = trolley.body(4, 5).circle(2).body;
var b2 = trolley.body(6, 12).circle(2).body;
trolley.joint(b1, 1, 1, b2, 1, 1);
