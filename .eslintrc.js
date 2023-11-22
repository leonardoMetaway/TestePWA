module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false
    },
  },
  extends: [
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'indent': [
      'error',
      2
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-for-template-key': 'off',
    'no-undef': 'off',
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
