# Placeholder attribute in inputs for old browsers
Add support placeholder attribute with old browsers (IE 9, IE 8, IE 7, IE 6 ...)

## Usage

Below is a quick example how to use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!--[if lt IE 10]> 
        <script src="saba-old-placeholders"></script>
    <![endif]-->
</head>
<body>
    <input type="text" name="aa" id="aa" placeholder="Hola">
    <input type="text" name="bb" id="bb">
    <input type="text" name="cc" id="cc">
    <input type="text" name="dd" id="dd">
    <input type="text" name="ee" id="ee" placeholder="Adios">
</body>
</html>
```
Enjoy and [Programa con Saba](https://programaconsaba.com/) :)
