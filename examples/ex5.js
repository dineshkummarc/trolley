trolley.init();
trolley.body(0, 8, true).box(15, 1).create();
var b1 = trolley.body(4, 5).circle(2).create();
var b2 = trolley.body(6, 12).circle(2).create();
trolley.joint().a(b1, 1, 1).b(b2, 1, 1);
