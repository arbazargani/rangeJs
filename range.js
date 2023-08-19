const prefix = 'range';
const seperator = '_';
const baseConfig = {
    'theme': 'default',
    'debug': false,
};

const backgroundMap = {
    'default': '#ccc',
    'prime': '#28293d',
    'sea': '#283d33'
}

const colorMap = {
    'default': '#f50',
    'prime': '#3e7bfa',
    'sea': '#02c38e'
}

function rangeJsElementHandler(config, item) {
    identifier = prefix + seperator + new Date().getTime();
    if (item.id == '') {
        item.id = identifier;
    }

    item.value = 0;
    item.classList.add('range', 'range_js');
    item.dataset.range_id = identifier;

    if (config.hasOwnProperty('theme')) {
        item.classList.add('theme_' + config.theme);
    }

    item.addEventListener("input", (event) => {
        let tempSliderValue = item.value;
        progress = tempSliderValue;
        background = backgroundMap[config.theme];
        forground = colorMap[config.theme];
        (config.debug) && console.log([background, forground]);
        item.style.background = `linear-gradient(to right, ${forground} ${progress}%, ${background} ${progress}%)`;
        item.dataset.value = item.value;
        item.title = item.value;
    })
}

function rangeJsinit(config = false, selector = false) {
    if (config == false) {
        config = baseConfig;
        (config.debug) && console.warn('inits rangeJs using default config.');
        (config.debug) && console.log(config);
    } else {
        (config.debug) && console.info('inits rangeJs using custom params.');
        (config.debug) && console.log(config);
    }
    
    if (selector == false) {
        let inputs = document.querySelectorAll('input[type=range]');
        inputs.forEach(item => {
            rangeJsElementHandler(config, item);
        });
    } else {
        let item = document.querySelector(selector);
        rangeJsElementHandler(config, item);
    }
}