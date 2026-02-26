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
-   - Card
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
-  useState() - Super powerful state variables in react
-  useEffect() -