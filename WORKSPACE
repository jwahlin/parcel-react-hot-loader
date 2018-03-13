workspace(name = "my_app")

git_repository(
    name = "build_bazel_rules_nodejs",
    commit = "f3fc23b7e1f32984a3e5d0c7eabe3baa127fb32a",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])
