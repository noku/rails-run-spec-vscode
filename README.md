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

```json
"ruby.specGem": {
    "type": "string",
    "default": "rspec",
    "description": "Defines the type of tool used for testing",
    "enum": [
        "rspec",
        "zeus"
    ]
},
"ruby.zeusStartTimeout": {
    "type": "number",
    "description": "Wait time neccessary on spec first run.
        Zeus gem requries a certain period to start",
    "default": 2000
}
```

### 0.0.1

Initial release of `rails-run-spec-vscode`.
