
# chai-aur-react

## How to Start a React App

1. **npx create-react-app my-app**  
	 > Not recommended as it installs bulky node modules, which may not all be used. This makes installation slow.

2. **npm create vite@latest**  
	 > Vite is a bundler. When this command is executed, the node_modules folder will not be seen until you run `npm i` or `npm install`.

---

## Day 2: Learnings

- React can have `.js` files, whereas Vite prefers `.jsx` files.
- `.js` files are standard JavaScript files and can contain any JavaScript code. `.jsx` files allow JSX syntax, which looks like HTML and is used in React to describe UI components. Using `.jsx` makes it clear that the file contains JSX code, while `.js` is for regular JavaScript. Both can be used in React projects, but `.jsx` is preferred for files with JSX syntax.
- You can use Fragment tags to render multiple elements in both Vite and React projects.

> In React, a Fragment lets you group multiple elements without adding extra nodes to the DOM. You can use it as `<React.Fragment>...</React.Fragment>` or simply `<>...</>`. This works the same way in any React project, including those created with Vite.

---

## Day 3

- You cannot use JavaScript statements while returning JSX, but you can always pass evaluated expressions.
- JavaScript statements cannot be passed because, at the end of the day, JSX gets converted into an object, and objects do not have code that needs to be evaluated at runtime.

---

## Day 4: React useState and Counter Project Notes

### Introduction to useState
- `useState` is a React hook for managing state in functional components.
- Import it from React:
	```js
	import { useState } from 'react';
	```

### useState returns an array
- The first element is the current state value.
- The second element is a function to update that state.
- Example:
	```js
	const [count, setCount] = useState(0);
	```

### Updating state
- Use the setter function (e.g., `setCount`) to update the value.
- React will re-render the component when state changes.

### Using evaluated expressions in JSX
- You can use curly braces `{}` to embed JavaScript expressions inside JSX.
- Example:
	```jsx
	<h2>Counter Value: {count}</h2>
	```

### Restricting counter values
- Add logic to prevent the counter from going below 0 or above 20.

### Issues and solutions
- State updates are asynchronous; use the setter function for reliable updates.
- Always use conditional checks to avoid invalid state values.

---

## Day 5: Props

**Props** (short for “properties”) are a way to pass data from a parent component to a child component. Props allow components to be dynamic and reusable by providing them with different values.

Props are read-only and cannot be changed by the child component. They are accessed in a component via the function parameter (usually named `props`).

```jsx
function Welcome(props) {
	return <h1>Hello, {props.name}!</h1>;
}

// Usage:
<Welcome name="Paridhi" />
```

Here, "name" is a prop passed to the Welcome component.

- > *React Fibre* : React Fiber is a reimplementation of React’s core algorithm, designed to improve how React handles rendering, especially for animations, layouts, and gestures.
Its main feature is incremental rendering: breaking rendering work into small units that can be paused, resumed, or aborted, and spread over multiple frames.
Fiber enables React to assign priorities to different updates, pause or reuse work, and handle concurrency.
The architecture separates reconciliation (figuring out what changed) from rendering (updating the UI), allowing React to optimize updates and support multiple rendering targets (like DOM and React Native).
A “fiber” is a JavaScript object representing a unit of work, similar to a virtual stack frame. Each fiber contains information about a component, its input, output, and priority.
This system allows React to schedule, prioritize, and manage updates more efficiently, leading to smoother user interfaces and better performance, especially for complex apps.
(to learn in detail read: https://github.com/acdlite/react-fiber-architecture)

- > *Reconciliation* : In React, reconciliation is the process of comparing the current UI tree with a new UI tree to determine what has changed. React uses this process to efficiently update the DOM by only making the minimal set of changes needed.
When state or props change, React creates a new virtual DOM tree.
React compares (diffs) the new tree with the previous one.
It figures out which elements have changed, been added, or been removed.
Only the necessary updates are applied to the real DOM.
This makes React apps fast and efficient, even as the UI grows more complex.

