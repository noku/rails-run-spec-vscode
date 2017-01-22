# rails-run-spec-vscode

This extension provides basic commands for running spec files in build-in vscode terminal.

## Features

Available commands:

```json
[
    {
        "command": "extension.runSpecFile",
        "title": "Run File Spec",
        "key": "cmd+shift+t"
    },
    {
        "command": "extension.runSpecLine",
        "title": "Run Spec Line",
        "key": "cmd+l"
    },
    {
        "command": "extension.runLastSpec",
        "title": "Run Last Spec",
        "key": "cmd+y"
    }
]
```

## Extension Settings

This extension contributes the following settings:

* `ruby.specGem`: set to `rspec`. Other possible value: `zeus`.

### 0.0.1

Initial release of `rails-run-spec-vscode`.
