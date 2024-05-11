// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license !== 'none') {
  return `![Static Badge](https://img.shields.io/badge/License-${license})`
  } else {
    return '';
  }
}
console.log()
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache_2.0') {
  return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL_v.3') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "MIT") {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'BSD_2-Clause') {
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'BSD_3-Clause') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Boost_1.0') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'CC0') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'EPL_2.0') {
    return 'https://opensource.org/license/epl-2-0';
  } else if (license === 'AGPL_v3') {
    return 'https://opensource.org/license/agpl-v3';
  } else if (license === 'GPL_v2') {
    return 'https://opensource.org/license/gpl-2-0';
  } else if (license === 'LGPL_v2.1') {
    return 'https://opensource.org/license/lgpl-2-1';
  } else if (license === 'MPL_2.0') {
    return 'https://opensource.org/license/mpl-2-0';
  } else if (license === 'Unlicense') {
    return 'https://opensource.org/license/unlicense';
  } else if (license === 'none') {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  const license = response;
  if (license !== '') {
    return (`${renderLicenseBadge(license)}\n ${renderLicenseLink(license)}`)
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return renderLicenseSection(response);
}

module.exports = {
  generateMarkdown
};
