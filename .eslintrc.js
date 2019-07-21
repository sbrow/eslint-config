module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "guard-for-in": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-functions": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "off",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-regex-spaces": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": "error",
        "prefer-const": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "constructor": "never",
                "method": "never",
                "named": "never"
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rulesDirectory": [
                    "/Users/sbrow/Documents/GitHub/eslint-config/node_modules/tslint-microsoft-contrib"
                ],
                "rules": {
                    "align": [
                        true,
                        "parameters",
                        "statements"
                    ],
                    "chai-prefer-contains-to-index-of": true,
                    "chai-vague-errors": true,
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "export-name": true,
                    "function-name": [
                        true,
                        {
                            "method-regex": "^[a-z][\\w\\d]+$",
                            "private-method-regex": "^[a-z][\\w\\d]+$",
                            "protected-method-regex": "^[a-z][\\w\\d]+$",
                            "static-method-regex": "^[A-Z_\\d]+$",
                            "function-regex": "^[A-Za-z][\\w\\d]+$"
                        }
                    ],
                    "import-name": true,
                    "import-spacing": true,
                    "informative-docs": true,
                    "insecure-random": true,
                    "jquery-deferred-must-complete": true,
                    "jsdoc-format": true,
                    "max-func-body-length": [
                        true,
                        100,
                        {
                            "ignore-parameters-to-function-regex": "^describe$"
                        }
                    ],
                    "max-line-length": [
                        true,
                        120
                    ],
                    "mocha-avoid-only": true,
                    "mocha-no-side-effect-code": true,
                    "mocha-unneeded-done": true,
                    "no-backbone-get-set-outside-model": true,
                    "no-cookies": true,
                    "no-delete-expression": true,
                    "no-disable-auto-sanitization": true,
                    "no-document-domain": true,
                    "no-document-write": true,
                    "no-exec-script": true,
                    "no-for-in": true,
                    "no-function-expression": true,
                    "no-http-string": [
                        true,
                        "http://www.example.com/?.*",
                        "http://localhost:?.*"
                    ],
                    "no-inner-html": true,
                    "no-jquery-raw-elements": true,
                    "no-reference-import": true,
                    "no-shadowed-variable": true,
                    "no-single-line-block-comment": true,
                    "no-string-based-set-immediate": true,
                    "no-string-based-set-interval": true,
                    "no-string-based-set-timeout": true,
                    "no-suspicious-comment": true,
                    "no-trailing-whitespace": true,
                    "no-typeof-undefined": true,
                    "no-unnecessary-field-initialization": true,
                    "no-unnecessary-local-variable": true,
                    "no-unnecessary-override": true,
                    "no-unsupported-browser-code": true,
                    "no-unused-expression": true,
                    "no-useless-files": true,
                    "no-with-statement": true,
                    "non-literal-fs-path": true,
                    "non-literal-require": true,
                    "object-literal-sort-keys": [
                        true,
                        "locale-compare",
                        "match-declaration-order"
                    ],
                    "one-line": [
                        true,
                        "check-catch",
                        "check-else",
                        "check-finally",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "only-arrow-functions": [
                        true,
                        "allow-declarations",
                        "allow-named-functions"
                    ],
                    "ordered-imports": [
                        true,
                        {
                            "import-sources-order": "case-insensitive",
                            "module-source-path": "full",
                            "named-imports-order": "case-insensitive"
                        }
                    ],
                    "possible-timing-attack": true,
                    "prefer-array-literal": true,
                    "promise-must-complete": true,
                    "quotemark": [
                        true,
                        "double",
                        "avoid-escape"
                    ],
                    "react-a11y-accessible-headings": true,
                    "react-a11y-anchors": true,
                    "react-a11y-aria-unsupported-elements": true,
                    "react-a11y-event-has-role": true,
                    "react-a11y-image-button-has-alt": true,
                    "react-a11y-img-has-alt": true,
                    "react-a11y-input-elements": true,
                    "react-a11y-lang": true,
                    "react-a11y-meta": true,
                    "react-a11y-no-onchange": true,
                    "react-a11y-props": true,
                    "react-a11y-proptypes": true,
                    "react-a11y-required": true,
                    "react-a11y-role": true,
                    "react-a11y-role-has-required-aria-props": true,
                    "react-a11y-role-supports-aria-props": true,
                    "react-a11y-tabindex-no-positive": true,
                    "react-a11y-titles": true,
                    "react-anchor-blank-noopener": true,
                    "react-iframe-missing-sandbox": true,
                    "react-no-dangerous-html": true,
                    "react-this-binding-issue": true,
                    "react-unused-props-and-state": true,
                    "semicolon": [
                        true,
                        "always"
                    ],
                    "trailing-comma": [
                        true,
                        {
                            "esSpecCompliant": true,
                            "multiline": "always",
                            "singleline": "never"
                        }
                    ],
                    "triple-equals": [
                        true,
                        "allow-null-check"
                    ],
                    "underscore-consistent-invocation": true,
                    "use-named-parameter": true,
                    "use-simple-attributes": true,
                    "variable-name": [
                        true,
                        "ban-keywords",
                        "check-format",
                        "allow-pascal-case"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast"
                    ]
                }
            }
        ]
    }
};
