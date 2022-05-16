const express = require('express');
var cors = require('cors')
var app = express();
app.use(express.json());

app.use(cors())

const PDFDocument = require('pdfkit');



app.put('/pdf', async (req, res) => {
  // const values = JSON.parse(req.body);
  console.log("The values are: ", req.body)
  var myDoc = new PDFDocument({ bufferPages: true });

  let buffers = [];
  myDoc.on('data', buffers.push.bind(buffers));
  myDoc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    res
      .writeHead(200, {
        'Content-Length': Buffer.byteLength(pdfData),
        'Content-Type': 'application/pdf',
        'Content-disposition': `attachment;filename=test.pdf`,
      })
      .end(pdfData);
  });

  myDoc
    .font('Times-Roman')
    .fontSize(12)
    .text(`this is a test text`);
  myDoc.end();
  //res.status(200).send('hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
