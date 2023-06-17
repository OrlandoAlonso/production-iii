/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',
        'secondary': '#868e96',
        'gray': '#868e96',
        'gray-dark': '#343a40',
        'success': '#28a745',
        'info': '#17a2b8',
        'warning': '#ffc107',
        'danger': '#dc3545',
        'light': '#f8f9fa',
        'dark': '#343a40',
        'submenu': '#1E1E1E',
        'dark-minus': '#323232',
        'bgbody': '#212121',
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      backgroundImage: {
        'waves': "url('/waves.png')",
      },
    },
  },
  plugins: [],
}

