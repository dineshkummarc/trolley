trolley.init();
trolley.build([{x: 0, y: 0, isStatic: true, 
               boxes: [{ width: 15, height: 1 }] },
    { x: 5, y: 1, boxes: [{ width: 4, height: 2 }] },
    { x: 7, y: 3, boxes: [{ width: 2, height: 2 }] },
    { x: 5, y: 3, boxes: [{ width: 2, height: 2 }] },
    { x: 6, y: 8, boxes: [{ width: 2, height: 2 }] },
    { x: 6, y: 12, circles: [{ size: 2}] }]
).create();
