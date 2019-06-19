#!/usr/bin/env node
const puppeteer = require("puppeteer");
const program = require("commander");

program
  .version("0.0.1")
  .option("-u, --url [value]", "URL to capture")
  .option("-O, --output [value]", "output file")
  .parse(process.argv);

var options = { width: 1500, height: 1000 };

function takeScrot(url, location) {
  puppeteer
    .launch({ args: [`--window-size=${options.width},${options.height}`] })
    .then(browser => {
      browser.newPage().then(page => {
        page
          .goto(url, { waitUntil: "networkidle0", timeout: 30000 })
          .then(() => {
            page
              .pdf({ path: location, fullPage: true, format: "A4" })
              .then(() => {
                browser.close();
              });
          });
      });
    })
    .catch(() => {
      console.log("Woops, could not convert page to pdf.");
    });
}

takeScrot(program.url, program.output);
