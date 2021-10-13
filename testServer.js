const express = require('express')
const app = express()
const port = 5500
const puppeteer = require('puppeteer')
const htmlTemp = require('./document')

app.get('', async (req, res) => {
    res.send('Welcome')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();    
    // await page.goto('C:/Users/jayjk/Documents/Learning Projects/Resume Builder/document/index.html');    
    await page.setContent(htmlTemp({}))
    await page.pdf({
    path: 'test.pdf',
    format: 'A4',
    margin: {
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px"
    }    
    });    
    await browser.close(); 
})
  


app.listen(port, ()=>{
    console.log("I am listening");
})