/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6b00',
        'secondary': '#0066cc'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}