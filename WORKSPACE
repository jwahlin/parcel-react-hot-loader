workspace(name = "my_app")

git_repository(
    name = "build_bazel_rules_nodejs",
    commit = "f3fc23b7e1f32984a3e5d0c7eabe3baa127fb32a",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "net_tcncloud_git_m_protos",
    commit = "37b5237af93f6d9701a035ed523a9e0b3856a187",
    remote = "git@git.tcncloud.net:m/protos.git",
)

load("@net_tcncloud_git_m_protos//typescript:defs.bzl", "typescript_repositories")

typescript_repositories()

git_repository(
    name = "com_google_protobuf",
    commit = "106ffc04be1abf3ff3399f54ccf149815b287dd9",
    remote = "https://github.com/google/protobuf",
)

new_git_repository(
    name = "com_github_googleapis_googleapis",
    build_file_content = """
package(default_visibility = ["//visibility:public"])
filegroup(
   name = "annotations_proto_files",
   srcs = ["google/api/annotations.proto", "google/api/http.proto"],
   visibility = ["//visibility:public"],
)
proto_library(
    name = "annotations_proto_lib",
    srcs = [":annotations_proto_files"],
    visibility = ["//visibility:public"],
    deps = [
        "@com_google_protobuf//:descriptor_proto",
    ],
)
""",
    commit = "4568cba600c72347542d7fa9c826c25584ef55a6",
    remote = "https://github.com/googleapis/googleapis.git",
)

git_repository(
    name = "com_github_tcncloud_protoc_gen_persist",
    commit = "f8af21350a89e968b956596160e69647c89760a8",
    remote = "https://github.com/tcncloud/protoc-gen-persist",
)
