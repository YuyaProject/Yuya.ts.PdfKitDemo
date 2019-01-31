"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var PDFDocument = require("pdfkit");
function writeNChar(value, n) {
    if (n === void 0) { n = 2; }
    var c = Array(n).join('0') + value;
    return c.substr(c.length - n);
}
// console.log('message');
var dt = new Date();
var dts = writeNChar(dt.getFullYear(), 4)
    + writeNChar((dt.getMonth() + 1))
    + writeNChar(dt.getDay())
    + '_'
    + writeNChar(dt.getHours())
    + writeNChar(dt.getMinutes())
    + writeNChar(dt.getSeconds());
var doc = new PDFDocument({ autoFirstPage: true });
doc.pipe(fs.createWriteStream("./GateExportPaper_" + dts + ".pdf"));
// // draw some text
// doc
//     .fontSize(25)
//     .text('Here is some vector graphics...', 100, 80);
// const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mauris fermentum, ultrices elit eget, tincidunt risus. Morbi hendrerit urna in ante tristique auctor. Fusce porta viverra laoreet. Aliquam at sapien velit. Vestibulum urna nisl, tristique et pharetra id, molestie ac diam. Donec euismod, erat id lacinia viverra, orci sapien dignissim lectus, eu pulvinar augue nisl eu erat. Nulla id tellus a lorem rutrum rhoncus nec ut arcu. Quisque sit amet sem ac velit efficitur molestie. In sed nulla condimentum purus dictum interdum et at orci.
// Donec consectetur diam vel urna venenatis, id iaculis sem pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus porta ex enim, at placerat diam feugiat quis. Nam varius ex sit amet massa vehicula, eu eleifend quam vehicula. Vivamus pellentesque, purus ut semper rutrum, arcu ex pellentesque elit, quis tempor ipsum ipsum aliquam magna. Suspendisse et sapien a leo imperdiet consequat. Sed eu risus ac erat vehicula fermentum. Vivamus id efficitur mi. Phasellus vel ornare dui.
// Praesent tincidunt risus libero, at ornare mi vehicula nec. Praesent posuere quam a quam dictum malesuada. Maecenas eget mattis velit, vel porta purus. Ut accumsan efficitur ex, sit amet sodales urna faucibus at. Ut orci ante, luctus non dignissim non, sollicitudin vel purus. Sed lobortis libero est, ut egestas erat malesuada eget. Aenean non consectetur tortor.
// Cras sodales lectus sed ex tempus fringilla. Nunc et diam tincidunt, dapibus dui ac, cursus lorem. Nullam eget commodo ligula. Quisque id tortor quis mi congue tincidunt. Nam a tortor pellentesque, condimentum felis quis, aliquet turpis. In non justo laoreet, condimentum purus vitae, mollis arcu. Donec quis est risus. Integer justo nunc, iaculis vel nisi quis, sodales pellentesque sem. Vivamus ultrices, turpis at consequat fringilla, nisl mi euismod augue, pellentesque elementum metus nulla ultrices nulla. Vestibulum eu tempus odio. Ut venenatis ullamcorper tempor. Phasellus laoreet lacinia neque, finibus hendrerit enim pulvinar a.
// Mauris malesuada massa elementum sapien aliquam iaculis. Donec id lobortis diam. Maecenas gravida tellus lectus, non ultricies tellus varius et. Duis id dolor vel quam mollis faucibus. Nullam consectetur erat id odio mattis commodo. Cras pretium a ligula sed placerat. Morbi id justo at turpis laoreet varius in suscipit sapien. Vivamus volutpat diam quis nisl volutpat, vel commodo risus rutrum. `;
// doc
//     .text('And here is some wrapped text...', 100, 300)
//     .font('Times-Roman', 'Times-Roman', 13)
//     .moveDown()
//     .text(lorem, {
//         width: 412,
//         align: 'justify',
//         indent: 30,
//         columns: 2,
//         height: 300,
//         ellipsis: true
//     });
console.log(path.join(__dirname, 'fonts/timesi.ttf'));
// doc.registerFont('Times New Roman',  'fonts/timesi.ttf', 'Times New Roman');
doc.registerFont('Times New Roman', path.join(__dirname, 'fonts/times.ttf'));
doc.registerFont('Times New Roman-Italic', path.join(__dirname, 'fonts/timesi.ttf'));
doc.registerFont('Times New Roman-BoldItalic', path.join(__dirname, 'fonts/timesbi.ttf'));
doc.registerFont('Times New Roman-Bold', path.join(__dirname, 'fonts/timesb.ttf'));
doc.registerFont('PT Sans', 'fonts/PT_Sans-Web-Regular.ttf');
doc.registerFont('PT Sans-Bold', 'fonts/PT_Sans-Web-Bold.ttf');
doc.registerFont('PT Sans-BoldItalic', 'fonts/PT_Sans-Web-BoldItalic.ttf');
doc.registerFont('PT Sans-Italic', 'fonts/PT_Sans-Web-Italic.ttf');
doc.info.Title = "Sample";
doc.info.Author = "Transformers";
doc
    .font('PT Sans')
    .fontSize(12)
    //.font('Helvetica','Helvetica',12)
    .text('Lorem Ipsum Dolor Sit Amet A.Ş.\nConsectetur Mah. Adipiscing Elit Bul. No:123/A\nAlsancak İzmir\nMalesuada V.D.\n1234567890', 10, 10, { width: 400, height: 50 });
doc
    .font('Times New Roman')
    .fontSize(10)
    .text(writeNChar(dt.getDay())
    + '.'
    + writeNChar((dt.getMonth() + 1))
    + '.'
    + writeNChar(dt.getFullYear(), 4)
    + '\n'
    + writeNChar(dt.getHours())
    + ':'
    + writeNChar(dt.getMinutes())
    + ':'
    + writeNChar(dt.getSeconds())
    + '\n1000003\n'
    + writeNChar(dt.getDay())
    + '.'
    + writeNChar((dt.getMonth() + 1))
    + '.'
    + writeNChar(dt.getFullYear(), 4), 410, 10, { align: 'right', width: 100, height: 50 });
// finish
doc.end();
// stream.on('finish', function () {
//     this.url = stream.toBlobURL('application/pdf');
// });
