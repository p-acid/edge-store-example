# Next.js Template for Quick Development

![image](https://github.com/p-acid/next-app-router-template/assets/87939521/06ff3506-63e9-45ec-8c15-8ab98d22ba0a)

## Features

- Default settings for development with next.js app router
- Workflow for notifications of PR by Telegram
  - PR created
  - PR reviewed
- Utils for creating custom react query hook

## Notices

- Please refer to the following to utilize Telegram workflow:
  - Create a Telegram bot and add the bot to the group chat room where you want to receive notifications.
  - Please add the following action secrets:
    - `TELEGRAM_CHAT_ID`: This is the ID of the chat room where Telegram notifications will be delivered.
    - `TELEGRAM_TOKEN`: Please enter your Telegram bot token. You can find out through the bot father.

## Commands

```sh
# init shadcn
npx shadcn-ui@latest init
npx shadcn-ui@latest add [ui-name]

# eslint plugin
yarn add -D eslint-config-prettier eslint-plugin-react eslint-plugin-tailwindcss

# import orders
yarn add -D @ianvs/prettier-plugin-sort-imports

# pre-commit, commit-msg
yarn add -D husky lint-staged @commitlint/config-conventional @commitlint/cli
yarn husky install
npx husky add .husky/pre-commit "yarn lint-staged"
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```
