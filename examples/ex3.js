trolley.init();
trolley.body(0, 0, true).box(15, 1).create();
for (var i = 1; i < 8; i += 2) {
    trolley.body(5, i).box(2, 2).create();
}
trolley.body(4.5, 15).box(2, 2, {
    density: 100
}).create();
