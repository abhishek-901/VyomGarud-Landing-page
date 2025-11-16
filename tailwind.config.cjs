module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#222428', // charcoal base
                    dark: '#111213',
                    accent: '#ff7b00'
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
}
