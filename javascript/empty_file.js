/* 
0. Even if a empty file javascript will do this work below line : 
1. window is a global objet that is created along with the global execution context
2. this keyword refers to the window object

3. JS is running in lots of devices or browsers, example firefox, realme watch etc,
So every device or browser have their own JS engine as chrome has v8 engine
to run JS. So each engine has their responsibility to create a global window object.

4. this === window, so even if a execution context at a function level is created,
a new window object is also created as well with that. So this refers to that window.

5. Window object has a lots of functions which JS provides, that we can use.

6. Global space is anything that you write which not inside a function

7.



*/