# rails-run-spec-vscode

This extension provides basic commands for running spec files in build-in vscode terminal.

## Features

Available commands:

```json
[
    {
        "command": "extension.runFileSpecs",
        "title": "Run File Specs",
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

Also there is an option to run any `file` or `folder` specs from sidebar.
**Right click** an folder or spec file and choose `Run Specs` option.

You can also run spec for currently open file, the extension will try to guess the path using Rails convention:

`app/controllers/test_controller.rb => spec/controllers/test_controller_spec.rb`

## Extension Settings

This extension contributes the following settings:

```json
"ruby.specCommand": {
    "type": "string",
    "default": "",
    "description": "Defines a custom command to run for specs (i.e. 'spring rspec')"
},
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
"ruby.specFocusTerminal": {
    "type": "boolean",
    "default": true,
    "description": "Defines if it should focus on terminal on each spec run"
}
"ruby.specClearTerminal": {
    "type": "boolean",
    "default": true,
    "description": "Defines if it should clear the terminal on each spec run"
}
"ruby.specSaveFile": {
    "type":"boolean",
    "default": false,
    "description": "Auto Save file before running spec test"
}
```

### 0.0.1

Initial release of `rails-run-spec-vscode`.
