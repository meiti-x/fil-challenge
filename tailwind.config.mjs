/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default {
  plugins: [react(), tsconfigPaths()],
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  }
}
