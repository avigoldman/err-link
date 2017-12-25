# err-link [![Build Status](https://travis-ci.org/avigoldman/err-link.svg?branch=master)](https://travis-ci.org/avigoldman/err-link)

> Build err.sh links

Generate short links to error messages stored in the `/errors` folder of your repositories. Read the [blogpost](https://zeit.co/blog/err-sh) for more.

## Install

```
$ npm install err-link
```


## Usage

```js
const err = require('err-link')

err('zeit', 'now-cli', 'env-no-secret')
//=> 'https://err.sh/zeit/now-cli/env-no-secret'

const instance = err.instance('zeit', 'now-cli')

instance('env-no-secret')
//=> 'https://err.sh/zeit/now-cli/env-no-secret'
```

## API

### err(user, repo, code)

#### user

Type: `string`

The GitHub user or organization

#### repo

Type: `string`

The GitHub repository name

#### code

Type: `string`

The filename for the error message

### err.instance(user[, repo])

Creates an instance of the `err` function with the given preset values

#### user

Type: `string`

The GitHub user or organization

```js
const err = require('err-link').instance('zeit')

err('now-cli', 'env-no-secret')
//=> 'https://err.sh/zeit/now-cli/env-no-secret'
```

#### repo

Type: `string`

The GitHub repository name

```js
const err = require('err-link').instance('zeit', 'now-cli')

err('env-no-secret')
//=> 'https://err.sh/zeit/now-cli/env-no-secret'
```


## Examples

* [https://err.sh/zeit/now-cli/env-no-secret](https://err.sh/zeit/now-cli/env-no-secret)
* [https://err.sh/zeit/micro/path-missing](https://err.sh/zeit/micro/path-missing)


## Related

- [err-sh](https://github.com/zeit/err-sh) - Microservice that forwards you to error messages


## License

MIT © [Avi Goldman](https://avigoldman.com)
