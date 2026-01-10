/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'badminton-green': '#32CD32',
                'badminton-dark': '#1a1a1a',
            }
        },
    },
    plugins: [],
}
