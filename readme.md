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
* ☕ can be better by a cup of coffee

## How to use
### Basic usage
1. include base css file.
```html
<!-- base css file, contains base styles -->

<!-- load directly -->
<link rel="stylesheet" href="range.css">

<!-- load via jsDeliver -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arbazargani/rangeJs/range.css">
```
2. include base js file before body closing tag
```html
<!-- core js file, contains initial script -->

<!-- load directly -->
<script src="range.js"></script>

<!-- load via jsDeliver -->
<script src="https://cdn.jsdelivr.net/gh/arbazargani/rangeJs/range.js"></scrtip>
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

<span style="color: red">**Note:** </span>for values more than 100, you should use `balancer` option to fix. use negative or positive integer directly inside config object.

```js
function notif(msg) {
    window.alert(msg);
}
// range inputs only supports 2 events
rangeJsinit({
    'theme':'default',
    'debug': true,
    'value': 10,
    'rtl': true,
    'balancer': -2,
    'cfns': {
        'input': () => { notif('on input triggered.') },
        'change': () => { console.log('changed') }
    }
}, '#range_default');
```

## Config options
currently RangeJs supports below options.
| name       |  required |  type  | default | description |
|:-----------|:---------:|:------:|:-------:|:------- |
| `theme`    | false     | string | `'default'` | theme name |
| `debug`    | false     | boolean|  `false`    | enables console debugging |
| `value`    | false     | integer|  `0`        | initial value |
| `balancer` | false     | integer|  `0`        | balancer number (positive/negative) to handle styling for values more than 100 |
| `cfns`     | false     | object |  `null`     | callback functions |
| `rtl`      | false     | boolean|  `false`    | is rtl or not |
| `rotate`   | false     | integer|  `0`        |  rotation degree |

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

## Direction
for rtl inputs, set `rtl` to `true` in config object.

**Note:** consider you should set `direction` style for input yourself, this option only handle the background fill direction.

## Current/Future features list
* ⬜ add step seprator option
* ✅ ~~handle first init selected area forground color~~
* ✅ ~~add default value option~~
* ✅ ~~callback function handler for events~~
* ✅ ~~debug option~~
* ✅ ~~handle single or all inputs~~

## Contribute
To all those who can use the keyboard, **pull requests are welcomed** 🙏.

## Donate
for now I prefer pull requests and stars. for the future, i will receive donations 💸.

## License

The RangeJs is open-sourced script licensed under the [MIT license](https://opensource.org/license/mit/).