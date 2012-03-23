trolley.init();
trolley.body(0, 0, true).box(15, 1).create();
trolley.body(5, 1).box(2, 2).create();
trolley.body(4, 15, {
    fixedRotation: true
}).box(2, 2, {
    density: 100
}).create();
