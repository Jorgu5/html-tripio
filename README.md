> Folder structure for atomic design projects inspired by Brad Frost's book. (WIP)

## Installation

* Install npm dependencies.
```
npm install
```
* Run all the default gulp tasks.
```
gulp
```
* Open project in browser and watch for file changes.
```
gulp watch
```

## Start coding

You need to work in the `src` folder, where all your source files should be located. The project structure looks something like this:

```
tripio-app/
└── src/
		├── assets/
		│		├── fonts/
		│		├── icons/
		│		└── img/
		├── css/
		├── html/
		└── js/
```

Inside the `src/css` and `src/html` folders we have a similar folder structure that follows the atomic design principles:
```
css/
	├── __00-atom/
	├── __01-molecule/
	├── __02-organism/
	├── __03-template/
	└── __04-views/

```

We have 4 levels of abstraction in this proposal based on http://bradfrost.com/blog/post/atomic-web-design/
```
Level 1: Atom 
Level 2: Molecule 
Level 3: Organism 
Level 4: Pages (Templates/pages)
```
For any other tool or utility we might need in the css or html folders we have a `Level 0: Toolbox` which has parts of the css or html that are not directly useable on their own. This could be mixins, variables like colors and sizes, partials or settings.

To have a better understanding of the atomic design pattern and how it helps maintain and scalate better large projects, check the next Related posts section.

## Related posts:
* [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/)
* [CSS architecture for design systems - Important read!!!](http://bradfrost.com/blog/post/css-architecture-for-design-systems/)
* [SUIT CSS utilities](https://github.com/suitcss/utils)
* [UI code with namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
* [http://cssguidelin.es/](http://cssguidelin.es/)
* [BEM Methodology](https://en.bem.info/methodology/)

### Compile Sass
```
gulp css
```
This will compile all the `.scss` files in `src/css/` and concatenate them to a single file located in `dist/css/styles.css`, except for `fonts.scss` which will be compiled to a separared css file `dist/css/fonts.css`.

## Generate font styles
```
gulp fonts
```
This task will generate the styles for the fonts placed in the `src/assets/fonts/` folder.

### Minimize images
```
gulp imagemin
```
This task will create a copy of all your image files located in `src/assets/img/` and create an optimized and lighter version in the folder `dist/img/`.

### Run all tasks
```
gulp
```
This task runs all the previous tasks.