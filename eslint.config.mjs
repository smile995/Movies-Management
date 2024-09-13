// @ts-check
import globals from "globals";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "no-console":"warn",
            "prefer-const":"error"
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    }
);