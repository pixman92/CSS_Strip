# CSS_Strip
a simple JS function that Strips all CSS from a DOM elem, and then adds all class names in 2nd param





This function - takes 1) a selected class target & 2) a Single CSS Array
```Javascript
changeCSS(select, cssArray)
```
eg
changeCSS('text', ['class1', 'class2']


This function - takes 1) a selected class target & 2) a 2d array of any length
```Javascript
cssFromArray(select, array)
```
eg
cssFromArray('text', [['class1', 'class2'], ['class1, 'class3'],['class2, 'class4']])
