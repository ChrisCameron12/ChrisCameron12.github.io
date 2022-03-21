module.exports = {
    // plugins: [require("autoprefixer"), require("postcss-pxtorem")]
    plugins: {
        'autoprefixer': {},
        'postcss-pxtorem': {
            'propList': [
                'font', 
                'font-size', 
                'line-height', 
                'letter-spacing'
            ]
        }
    }
};

