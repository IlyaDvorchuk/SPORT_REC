# React + TypeScript + Vite

Развернул на Vite (CRA  уже устарел).  Использовал стандартную архитектуру, хотя для больших проектов предпочитаю FSD
.
Подключил react router. В этом проекте много страниц. Создал ErrorBoundary для перехвата ошибок. Страницы ошибки нет, выводится обычный div  для примера. Так же AppRouter в есть лоадер, где тоже див для примера. Главные страницы грузятся асинхронно с помощью lazy.

Проект двуязычен, поэтому подключил i18next с автоматическим сохранением в localStorage. Перевод каждой страницы находится в разных папках, потому что когда большой проект, хранить весь перевод в одном json становится дико неудобно.

Подключил supabase для регистрации. Создал маленькую тестовую страницу для неё. Пример чисто для показа кода. Надо ещё настроить что пользователь подтвердил свой мэйл

Так как state manager не был указан то я выбрал дефолтный redux-toolkit. К нему я подключил персистор, что бы значения из стора сразу сохранялись в localStorage.

Апи мне, к сожалению, не дали, и я успел для примера сделать стандартный запрос через jsonplaceholder с помощью rtk-query. Мне лично больше нравятся redux-thunk, но это вкусовщина. RTK Query то же неплох

Для стилей использовал SCSS с подключением через module. Добавил переменные для цвета, один миксин. Попросили использовать MUI, поэтому постарался добавлять компоненты MUI почаще. 

Из косяков кое где TS ругается. Не успел прописать интерфейсы  в тех местах.

Больше всего сожалею что не успел сделать график рейтинга организации. Выглядит интересно, я бы попробовал через plotly. Использовал эту либу на python и R, знаю что она есть и на JS. Для  инпутов использовал бы  React Hook Form, Yup то же неплох.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
