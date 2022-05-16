import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FileSaver from 'file-saver';
function App() {

  const clickButton = async() => {
    console.log("I have been clicked");

    // const res = await axios.get('http://localhost:5000/pdf')
    // console.log("The response.data is: ", res.data)



//     axios({
//     url: 'http://localhost:5000/pdf', //your url
//     method: 'GET',
//     responseType: 'blob', // important
// }).then((response) => {
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'file.pdf'); //or any other extension
//     document.body.appendChild(link);
//     link.click();
// });

// save from a url
//FileSaver.saveAs("http://localhost:5000/pdf", "testtest.pdf");
const res = await axios({
      url: 'http://localhost:5000/pdf', //your url
      method: 'put',
      responseType: 'blob', // important
      data: {
        foo: 'blahblahlah', // This is the body part
      }

})







console.log("The response data is: ", res.data)

const blob = new Blob([res.data], {type: "application/pdf"});
FileSaver.saveAs(res.data, "zzkkz.pdf");
  }

  return (
    <div className="App">
      <button onClick={clickButton}>The button</button>
    </div>
  );
}
// https://github.com/eligrey/FileSaver.js/issues/516
// https://stackoverflow.com/questions/58090447/expressjs-and-pdfkit-generate-a-pdf-in-memory-and-send-to-client-for-download
// https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
export default App;
