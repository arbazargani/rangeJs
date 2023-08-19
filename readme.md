# RangeJS
<p align="center">
<img alt="rangeJs" src="https://github.com/arbazargani/rangeJs/blob/main/images/head.png?raw=true" width="auto"></img>
</p>

Created for specific reason, to deal with html range inputs better and prettier.
## About RangeJS
* 👌 almost easy to use
* 🎨 comes with base themes & can accept new themes
* ⚒️ debug freindly process
* 🎯 can target all range inputs, or specific one
* ☕ can be better by a cup of coffe

## How to use
### Basic usage
1. include base css file.
```html
<!-- base css file, contains base styles -->
<link rel="stylesheet" href="range.css">
```
2. include base js file before body closing tag
```html
<!-- core js file, contains initial script -->
<script src="range.js"></script>
```
3. call init function
```js
// calling empty, default theme & default config on all range inputs on page
rangeJsinit();

// calling with only config, on all range inputs
rangeJsinit({'theme':'sea', 'debug': true});

// init only on specific element
rangeJsinit({'theme':'prime'}, '#range_prime');
```
### Advanced usage
you can define your own callback functions to execute after firing events.
currently you can define your callbacks by `cfns` parameter inside config object.

**Note:** consider to pass the callback as a lambda function to prevent unnecessary function call.

```js
function notif(msg) {
    window.alert(msg);
}
// range inputs only supports 2 events
rangeJsinit({
    'theme':'default',
    'debug': true,
    'value': 10,
    'cfns': {
        'input': () => { notif('on input triggered.') },
        'change': () => { console.log('changed') }
    }
}, '#range_default');
```

## Config options
currently RangeJs supports below options.
| name  |  required |  type  | default |
|:------|:---------:|:------:|:-------:|
| `theme` | false     | string | `'default'` |
| `debug` | false     | boolean|  `false`  |
| `value` | false     | integer|  `0`  |
| `cfns` | false     | object|  `null`  |

## Theming
you can use core ready themes, or define your own theme.
1. include theme css file.
```html
<!-- base css file, contains base styles -->
<link rel="stylesheet" href="range.css">
<!-- theme(s) css file -->
<link rel="stylesheet" href="range_prime.css">
<link rel="stylesheet" href="range_sea.css">
```

2. add theme to config during initialization 
```js
// on specific element
rangeJsinit({'theme':'prime'}, '#range_default');
// or on all of inputs
rangeJsinit({'theme':'sea'});
```

### How to defing custom themes?
For now, this will be a little hard, you should define ur custom css like `range_prime.css` or `range_sea.css`, then re-fill the `[backgroundMap, colorMap]` after `range.js` tag and before `rangeJsinit()` calls.

**Note:** Any input automatically takes `theme_{theme-name}` class. i.e for prime theme, 'theme_prime' appends to input tag class list. so your theme css file should use this name format for styling. 

In the next versions, it will be easier to make the theme because it is one of our important goals.

## Current/Future features list
* ⬜ add step seprator option
* ✅ ~~add default value option~~
* ✅ ~~callback function handler for events~~
* ✅ ~~debug option~~
* ✅ ~~handle single or all inputs~~

## Contribute
To all those who can use the keyboard, **pull requests are welcomed** 🙏.