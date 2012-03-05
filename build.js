var jade = require('jade'),
fs = require('fs');

var dir = __dirname,
exdir = dir + '/examples/',
examples = fs.readdirSync(exdir),
input = fs.readFileSync(dir + '/index.jade'),
output = dir + '/index.html',
data = require('./examples.json');

examples.sort(function(a, b) {
    return a > b;
});

examples = examples.map(function(ex, i) {
    var d = data[i] || {};
    return {
        js: fs.readFileSync(exdir + ex).toString().split(/\n/),
        data: d
    };
});

var markup = jade.compile(input)({
    examples: examples
});

fs.writeFileSync(output, markup);

