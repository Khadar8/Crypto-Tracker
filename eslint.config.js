import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react' // Import React plugin
import jsxA11y from 'eslint-plugin-jsx-a11y' // Import accessibility plugin

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react': react, // Add React plugin
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y, // Add accessibility plugin
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended, // Use React's recommended rules
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended, // Use accessibility's recommended rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Optional React rules you might consider:
      'react/prop-types': 'warn', // Or 'error' for stricter prop type checking
      'react/no-array-index-key': 'warn',
      'react/jsx-indent': ['warn', 2], // Enforce JSX indentation with 2 spaces
      'react/jsx-curly-spacing': ['warn', 'never'],
    },
  },
]