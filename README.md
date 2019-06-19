# Webpagepdf [![npm version](https://badge.fury.io/js/webpagepdf.svg)](https://badge.fury.io/js/webpagepdf)

Command like thingy to take a screenshot of a webpage


## Installation

```
npm install -g webpagepdf
```

or even use with `npx` directly without installing

```
npx webpagepdf -u https://meain.io -O meain.pdf
```

## Usage

```
Usage: webpagepdf [options]

Options:
  -V, --version         output the version number
  -u, --url [value]     URL to capture
  -O, --output [value]  output file
  -h, --help            output usage information
```

#### Example

```
webpagepdf -u https://meain.io -O meain.pdf
```
