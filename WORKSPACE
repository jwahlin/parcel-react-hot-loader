workspace(name = "my_app")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    commit = "38e873e2f9134dad1664eeff5b6d2d6fe520a635",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")
yarn_install(
    name = "yarn_install",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock"
)
