trolley.init();
trolley.body(0, 0, true).box(50, 1);
trolley.body(10, 10).box(1, 1);
trolley.body(15, 10).box(1, 2, {
    density: 2,
    rotate: false
}).circle(0, 2, 1);

