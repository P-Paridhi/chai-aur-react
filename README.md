# chai-aur-react
Two commands to start creating react app
1. npx create-react-app my-app 
- > this is not recommended as it includes bulky node modules installation which may or may not be used in the project. 
- > Because it is bulky it takes too long to get everything installed. 

2. npm create vite@latest
- > Vite is a bundler 
- > When this command is executed node modules folder will not be seen and is later installed after running npm i or npm install

Day 2: Learnings 
- > React can have .js files where as Vite restricts to use .jsx
- > .js files are standard JavaScript files and can contain any JavaScript code. .jsx files are also JavaScript files, but they specifically allow JSX syntax, which looks like HTML and is used in React to describe UI components. Using .jsx makes it clear that the file contains JSX code, while .js is for regular JavaScript. Both can be used in React projects, but .jsx is preferred for files with JSX syntax. 
- > You can use Fragment tags to render multiple elements in both Vite and React projects.
In React, a Fragment lets you group multiple elements without adding extra nodes to the DOM. You can use it as <React.Fragment>...</React.Fragment> or simply <>...</> (the shorthand).
This works the same way in any React project, including those created with Vite.

Day 3: 
- > You cannot use JavaScript syntax while returning but can always pass Evalutated Expression. 
- > javaScript cannot be passed because at the end of the day it gets converted into and object and object does not have code that needs to be evaluated at runtime. 

Day 4: 

- > React useState and Counter Project Notes

- > Introduction to useState:
	 - useState is a React hook for managing state in functional components.
	 - Import it from React: `import { useState } from 'react'`.

- > useState returns an array:
	 - The first element is the current state value.
	 - The second element is a function to update that state.
	 - Example: `const [count, setCount] = useState(0);`

- > Updating state:
	 - Use the setter function (e.g., setCount) to update the value.
	 - React will re-render the component when state changes.

- > Using evaluated expressions in JSX:
	 - You can use curly braces `{}` to embed JavaScript expressions inside JSX.
	 - Example: `<h2>Counter Value: {count}</h2>`

- > Restricting counter values:
	 - Add logic to prevent the counter from going below 0 or above 20.

- > Issues and solutions:
	 - State updates are asynchronous; use the setter function for reliable updates.
	 - Always use conditional checks to avoid invalid state values.
