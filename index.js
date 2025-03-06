// @ts-check

/**
 * @import { Linter } from 'eslint'
 * @import { ParserOptions } from '@angular-eslint/template-parser'
 */

const _ = require('@angular-eslint/template-parser')

/**
 * @param {string} code
 * @param {ParserOptions} options
 * @returns {Linter.ESLintParseResult} parse result with AST
 */
const parseForESLint = (code, options) => {
  const result = _.parseForESLint(code, options)
  result.ast.body = result.ast.body || []
  return /** @type {Linter.ESLintParseResult} */ (
    /** @type {unknown} */ (result)
  )
}

module.exports = {
  ..._,
  parseForESLint,
  /**
   * @param {string} code
   * @param {ParserOptions} options
   * @returns {import('eslint').AST.Program} parsed AST result
   */
  parse: (code, options) => parseForESLint(code, options).ast,
}
