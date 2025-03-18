# teksluggable

## About
A lightweight package for generating slugs from strings.

## Install
Run the command
```bash
  npm i teksluggable
```
### JS
Add the following code to your JS file:
```javascript
import changeToSlug from "teksluggable";

changeToSlug(string, separator,fa);
```
- *string*: represents the value you want to convert.
- *separator*: defines the delimiter (default is '-').
- *fa*: is a boolean; when true, it converts Persian and Arabic characters to English; otherwise, they remain as is.

Another function is provided to automatically convert the value of an input or textarea to a slug using the code below:
```javascript
import {slugify} from "tkicon";

slugify(selector ,seperator ,fa)
```
- *selector*: indicates how the input element should be targeted.

> **Note**: The function is triggered by the focusout event, which occurs when you click outside the input field.

## also see
- [npm](https://www.npmjs.com/package/teksluggable)
- [github](https://github.com/teksite/teksluggable.git)
- [laratek](https://laratek.ir)
- [teksite](https://teksite.net)
