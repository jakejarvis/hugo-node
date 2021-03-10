'use strict';

const path = require('path');
const { version } = require('../package.json');
const BinWrapper = require('bin-wrapper');

const baseUrl = `https://github.com/gohugoio/hugo/releases/download/v${version}/`;

/* eslint-disable indent, operator-linebreak, no-multi-spaces, unicorn/no-nested-ternary */
const src =
  process.platform === 'darwin' && process.arch === 'x64'
    ? `${baseUrl}hugo_extended_${version}_macOS-64bit.tar.gz` :
  process.platform === 'darwin' && process.arch === 'arm64'
    ? `${baseUrl}hugo_extended_${version}_macOS-ARM64.tar.gz` :

  process.platform === 'linux' && process.arch === 'x64'
    ? `${baseUrl}hugo_extended_${version}_Linux-64bit.tar.gz` :
  process.platform === 'linux' && process.arch === 'x86'
    ? `${baseUrl}hugo_${version}_Linux-32bit.tar.gz` :
  process.platform === 'linux' && process.arch === 'arm'
    ? `${baseUrl}hugo_${version}_Linux-ARM.tar.gz` :
  process.platform === 'linux' && process.arch === 'arm64'
    ? `${baseUrl}hugo_${version}_Linux-ARM64.tar.gz` :

  process.platform === 'win32' &&  process.arch === 'x64'
    ? `${baseUrl}hugo_extended_${version}_Windows-64bit.zip` :
  process.platform === 'win32' &&  process.arch === 'x86'
    ? `${baseUrl}hugo_${version}_Windows-32bit.zip` :

  null;
/* eslint-enable indent, operator-linebreak, no-multi-spaces, unicorn/no-nested-ternary */

module.exports = new BinWrapper()
  .src(`${src}`)
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'hugo.exe' : 'hugo');
