trolley.init();
trolley.body(6, 10, true).box(18, 1).create();
var b1 = trolley.body(15, 20).circle(2).create();
var b2 = trolley.body(13, 10).circle(2).create();
var b3 = trolley.body(17, 10).circle(2).create();
trolley.joint().a(b1, 1, 1).b(b2, 1, 1);
trolley.joint().a(b1, 1, 1).b(b3, 1, 1);
