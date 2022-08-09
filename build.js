"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.blue("           Leigh Dinaya"),
  handle: chalk.green("leighdinaya"),
  shorthandle: chalk.magenta("lrd"),
  work: chalk.white("Web Developer"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("leighrd_"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~leighdinaya"),
  github: chalk.gray("https://github.com/") + chalk.green("leighayanid"),
  web: chalk.cyan("https://leighdinaya.com"),
  npx: chalk.red("npx") + " " + chalk.white("leighdinaya"),
  labelWork: chalk.magenta.bold("    Work:"),
  labelTwitter: chalk.cyan.bold(" Twitter:"),
  labelnpm: chalk.blue.bold("     npm:"),
  labelGitHub: chalk.green.bold("  GitHub:"),
  labelWeb: chalk.yellow.bold("     Web:"),
  labelCard: chalk.blue.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.blue(boxen(output, options))
);
