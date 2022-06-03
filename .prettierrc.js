const customRules = {
    printWidth: 300,
    arrowParens: 'avoid',
    singleQuote: true,
    bracketSpacing: true,
    useTabs: false,
    tabWidth: 4,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    proseWrap: 'always',
    trailingComma: 'all',
    semi: false,
}

module.exports = {
    ...customRules,
    ...require('gts/.prettierrc.json'),
}
