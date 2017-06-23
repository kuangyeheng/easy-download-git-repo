// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    // add your custom rules here
    'rules': {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': 2,
        'semi': 0,
        'no-constant-condition': 0,
        'indent': 0,
        'no-tabs': 0,
        'no-multi-spaces': 0,
        'keyword-spacing': 0,
        'space-infix-ops': 0,
        'no-unused-vars': 1,
        'comma-spacing': 0,
        'eol-last': 0,
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 0,
        'space-before-function-paren': 0,
        'space-before-blocks': 0,
        'no-useless-escape': 0,
        'no-mixed-spaces-and-tabs': 0,
        'spaced-comment': 0,
        'camelcase': 0,
        'key-spacing': 0,
        'padded-blocks': 0,
        'no-console': 2
    }
};
