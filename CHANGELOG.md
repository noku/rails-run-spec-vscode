# Change Log

## [0.1.4]

- BREAKING CHANGE: Update all keybindings to use `cmd+ctrl+XXX` to avoid overwriting commonly used default keybindings.

## [0.1.2]

- Fixes issue with clearing terminal after the command is executed, introduced in VSCODE version `1.23.0`.
- Make extension work with workspaces

## [0.1.1]

- Add new option for spec pattern to support minitest.

## [0.1.0]

- Add new option for auto saving file before the spec is started.

## [0.0.9]

- Added the ability to run specs from other files. `app/controllers/comments_controller.rb => spec/controllers/comments_controller_spec.rb`
- Fix ability to run file spec for new relased version of Vscode 1.10.1.

## [0.0.8]

- Added two new configurations `specFocusTerminal` and `specClearTerminal`
- Added possibility to run specs from side bar.
