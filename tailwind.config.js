/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
    content: [],
    theme: {
        extend: {}
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                valentine: {
                    primary: '#e86d7c',
                    'primary-focus': '#e13d50',
                    'primary-content': '#ffffff',

                    secondary: '#a68df6',
                    'secondary-focus': '#8462f3',
                    'secondary-content': '#ffffff',

                    accent: '#88dbdd',
                    'accent-focus': '#62ced0',
                    'accent-content': '#ffffff',

                    neutral: '#ae4770',
                    'neutral-focus': '#883a54',
                    'neutral-content': '#f0d6e8',

                    'base-100': '#0a090b',
                    'base-200': '#e9aad9',
                    'base-300': '#e48bcc',
                    'base-content': '#632c3b',

                    info: '#1c92f2',
                    success: '#009485',
                    warning: '#ff9900',
                    error: '#ff5724',

                    '--rounded-box': '1rem',
                    '--rounded-btn': '.5rem',
                    '--rounded-badge': '1.9rem',

                    '--animation-btn': '.25s',
                    '--animation-input': '.2s',

                    '--btn-text-case': 'uppercase',
                    '--navbar-padding': '.5rem',
                    '--border-btn': '1px'
                },
                synthwave: {
                    primary: '#e679c0',
                    'primary-focus': '#e04dac',
                    'primary-content': '#201047',

                    secondary: '#54c5f2',
                    'secondary-focus': '#88d7f7',
                    'secondary-content': '#201047',

                    accent: '#f3cc30',
                    'accent-focus': '#f6d860',
                    'accent-content': '#201047',

                    neutral: '#20134e',
                    'neutral-focus': '#140a2e',
                    'neutral-content': '#f9f7fd',

                    'base-100': '#2c1a65',
                    'base-200': '#20134e',
                    'base-300': '#140a2e',
                    'base-content': '#f9f7fd',

                    info: '#4fbff3',
                    success: '#71ead2',
                    warning: '#f3cc30',
                    error: '#e13d53',

                    '--rounded-box': '1rem',
                    '--rounded-btn': '.5rem',
                    '--rounded-badge': '1.9rem',

                    '--animation-btn': '.25s',
                    '--animation-input': '.2s',

                    '--btn-text-case': 'uppercase',
                    '--navbar-padding': '.5rem',
                    '--border-btn': '1px'
                }
            }
        ]
    }
}
