# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Wriien in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Supports Older Browsers
- Diagnostic
- Error Handing
- HTTPs
- Tree Shaking - Remove Unused Code
- Different dev and prod bundles

# JSX - HTML-like or XML-like Syntax

# JSX (Transcompiled Before it reaches JS - Engine) - Parcel - Babel

# JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTML Element (Render)

# React Element

- const heading = (
- <h1 className="head" tabIndex={5}>
-     Namaste React Using JSX 🚀
- </h1>
- );

# React Component

- Class Based Component - OLD
- Function Based Component - NEW

# Function Component

- const HeadingCoponent1 = () => {
- return <h1 className="heading">Namaste React Functional Component</h1>;
- };

- const HeadingCoponent2 = () => (
- <h1 className="heading">Namaste React Functional Component</h1>
- );

# Component Composition

- const Title = () => (
- <h1 className="head" tabIndex={5}>
-     Namaste React Using JSX 🚀
- </h1>
- );

- const HeadingCoponent = () => (
- <div id="container">
-     <Title />
-     <h1 className="heading">Namaste React Functional Component</h1>
- </div>
- );

# Namaste Food App

/\*\*

- Header
- - Logo
- - NavItems
- Body
- - Search
- - RestaurantContainer
- - Card
-     - Image
-     - Name Of Restaurant, Star Rating, Cuisine, Delivery Time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

- Two Types of Export / Import

- Default Export / Import

export default Component;
import Component from "path";

- Named Export / Import

export Component;
import {Component} from "path";

# React Hooks

(Normal JS Utility Functions)

- useState() - Super powerful state variables in react
- useEffect() -

- Never called useState hook outside the component.
- Always keep the hooks at the top of scope.
- Don't use useState inside a conditional statement.
- const [btnNameReact, setBtnNameReact] = useState("Login");

- if no dependency array => useEffect is called on every render.
- useEffect(() => {
- console.log("useEffect Called");
- });

- if dependency array is empty = [] => useEffect is called on initial render (just once).
- useEffect(() => {
- console.log("useEffect Called");
- }, []);

- if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated, then
- useEffect(() => {
- console.log("useEffect Called");
- }, [btnNameReact]);

- Two types of Routing -
- 1. Client Side Routing
- 2. Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build Our Store
- Connect Our Store to Our App
- Create Slice (cartSlice)
- dispatch (Action)
- Selector
