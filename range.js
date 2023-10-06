const prefix = 'range';
const seperator = '_';
const baseConfig = {
    'theme': 'default',
    'debug': false,        
};

const backgroundMap = {
    'default': '#ccc',
    'prime': '#28293d',
    'sea': '#283d33',
    'sky': '#497177'
}

const colorMap = {
    'default': '#f50',
    'prime': '#3e7bfa',
    'sea': '#02c38e',
    'sky': '#49e4fa'
}

function isDocumentRtl() {
    return true;
    if ((document.querySelector('html').dir === 'rtl')) {
        return true
    }
    return false;
}

function handleRangeElementStyle(item, config) {
    let progress = item.value;

    if (progress > 100 && item.max !== undefined) {
        // minus 2 to handle styling of background fill overflow.
        progress = Math.floor((progress * 100) / item.max);

        progress += (config.hasOwnProperty('balancer')) ? config.balancer : 0;
    }

    let direction = (config.hasOwnProperty('rtl') && config.rtl === true && isDocumentRtl()) ? 'left' : 'right';
    let background = backgroundMap[config.theme];
    let forground = colorMap[config.theme];
    
    (config.debug) && console.log([background, forground]);
    item.style.background = `linear-gradient(to ${direction}, ${forground} ${progress}%, ${background} ${progress}%)`;
    item.dataset.value = item.value;
    item.title = item.value;
}

function rangeJsElementHandler(config, item) {
    identifier = prefix + seperator + new Date().getTime();
    if (item.id == '') {
        item.id = identifier;
    }
    
    item.value = (config.hasOwnProperty('value')) 
        ? config.value 
        : (item.hasAttribute('value')) ? item.value : 0;
    item.classList.add('range', 'range_js');
    item.dataset.range_id = identifier;

    if (config.hasOwnProperty('theme')) {
        item.classList.add('theme_' + config.theme);
    }

    if (config.hasOwnProperty('rotate') && typeof(config.rotate) == 'number') {
        item.style.rotate = `${config.rotate}deg`;
    }

    // handle styling for first render
    handleRangeElementStyle(item, config)

    item.addEventListener("input", (event) => {
        // handle styling on changes
        handleRangeElementStyle(item, config);
    })

    if (config.hasOwnProperty('cfns')) {
        for (const [eventName, callbackFn] of Object.entries(config.cfns)) {
            item.addEventListener(eventName, callbackFn);
        }
    }
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