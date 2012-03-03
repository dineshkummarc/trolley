trolley.init();
trolley.body(0, 0, true).box(50, 1);
trolley.body(10, 15).box(1, 1);
for (var i = 0; i < 4; i++) {
    trolley.body(10, 0 + i).box(1, 1);
}
