import PDFDocument = require("pdfkit");
import * as fs from 'fs';

console.log('message');


var doc = new PDFDocument();
var stream = doc.pipe(fs.createWriteStream('./demo.pdf'));


// draw some text
doc
    .fontSize(25)
    .text('Here is some vector graphics...', 100, 80);



// finish
doc.end();
// stream.on('finish', function () {
//     this.url = stream.toBlobURL('application/pdf');
// });
