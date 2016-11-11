<img align="right" src="http://i.dailymail.co.uk/i/pix/2010/02/09/article-1249539-005E1BF400000258-954_233x320.jpg" />

# Trussle QC

QC is a tool that performs quality control checks on a Javascript repository. It makes sure that:

- All tests are passing (by calling `npm test`)
- All code is lint-free (using [Trussle's ESLint rules](https://github.com/trussle/eslint-config-trussle))
- Code coverage never goes down (using [Istanbul](https://github.com/gotwarlost/istanbul))

**If any of these checks don't pass, QC won't let you push your changes.** 
Mean, I know - but it's the only way you'll learn.

<br style="clear: both;" />

## Installation

QC should be installed as a dependency in your project:

```sh
npm install --save-dev @trussle/qc
```

**If you're using mocha,** you'll need to change from using `mocha` to using `_mocha`; this avoids forking the process, which [causes some issues with code coverage](https://github.com/gotwarlost/istanbul/issues/44).

## Usage

On installation, QC will do a few things:
- If there is no `.eslintrc.js` file, one is added to the root of the project.
- If there is no `.istanbul.yml` file, one is added to the root of your project.
- It will set up a [Git pre-push hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) that runs itself when pushing code, to make sure you're behaving 😘

If you want to run QC yourself, run `./node_modules/.bin/qc`.

## Configuring



