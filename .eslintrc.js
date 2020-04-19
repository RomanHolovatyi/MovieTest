module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  plugins: [
    'standard',
    'vue'
  ],

  rules: {
    'eqeqeq': 2,
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-useless-return': 'error',
    'no-trailing-spaces': 0,
    'indent': 'off',
    'key-spacing': 2,
    'vue/eqeqeq': 2,
    'vue/object-curly-spacing': [2, 'always'],
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'no-useless-catch': 'off',
    'no-misleading-character-class': 'off',
    'no-async-promise-executor': 'off',
    'switch-colon-spacing': 2
  }
}
