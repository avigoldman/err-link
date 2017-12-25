import test from 'ava'
import err from '.'

test('simple link', t => {
  t.is(
    err('zeit', 'now-cli', 'env-no-secret'),
    'https://err.sh/zeit/now-cli/env-no-secret'
  )
})

test('err instance with user', t => {
  const instance = err.instance('zeit')

  t.is(
    instance('now-cli', 'env-no-secret'),
    'https://err.sh/zeit/now-cli/env-no-secret'
  )
})

test('err instance with user and repo', t => {
  const instance = err.instance('zeit', 'now-cli')

  t.is(
    instance('env-no-secret'),
    'https://err.sh/zeit/now-cli/env-no-secret'
  )
})
