function err (user, repo, code) {
  return `https://err.sh/${user}/${repo}/${code}`
}

err.instance = (presetUser, presetRepo) => (repo, code) => err(presetUser, presetRepo || repo, code || repo)

module.exports = err
