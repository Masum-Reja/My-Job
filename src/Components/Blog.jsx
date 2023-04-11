import React from "react";
//import { useLoaderData } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h1 className=" text-center mt-32 text-4xl font-bold my-4">
        Question Answer Section
      </h1>
      <blockquote className=" border-2 p-5 my-5">
        <h3 className=" font-semibold text-2xl">
          1. When should you use context API?
        </h3>
        <p>
          {" "}
          <br />
          The Context API in React is useful when you need to share state or
          data between components that are not directly related to each other in
          the component tree. This can help reduce "prop drilling," or the
          process of passing props down through multiple levels of components,
          which can become cumbersome and make your code harder to maintain.
          <br /> <br /> Here are some scenarios in which you might want to
          consider using the Context API: <br /> <br />
          <li>
            When you have data or state that needs to be accessible to multiple
            components, but is not relevant to all components in your
            application.
          </li>
          <li>
            When you have a deeply nested component that needs to access data or
            state from a higher-level component, but passing props down to that
            component would be impractical.
            <li></li>
            When you want to avoid passing props through intermediary components
            that don't actually use them.
          </li>
          <li>
            When you want to create a reusable component that can be used across
            different parts of your application, but requires some contextual
            data to function correctly.
          </li>{" "}
          <br />
          In some cases, it may be better to use props to pass data down to
          child components.
        </p>
      </blockquote>

      <blockquote className=" border-2 p-5 my-5">
        <h3 className=" font-semibold text-2xl">2. What is a custom hook?</h3>
        <p>
          {" "}
          <br />A custom hook is a function in React that allows you to extract
          and reuse logic from your components. Custom hooks are a way to share
          stateful logic between components without using higher-order
          components or render props. In essence, a custom hook is just a
          regular JavaScript function that uses the built-in React hooks (such
          as useState, useEffect, useContext, etc.) to provide a specific
          behavior or functionality. You can create custom hooks to encapsulate
          common logic and share it across multiple components in your
          application.
        </p>
      </blockquote>

      <blockquote className=" border-2 p-5 my-5">
        <h3 className=" font-semibold text-2xl">3. What is'useRef'?</h3>
        <p>
          {" "}
          <br />
          'useRef' is a hook in React that provides a way to store and access
          mutable values that persist between renders of a component. It allows
          you to create a reference to a DOM element or to store any other
          mutable value, similar to an instance variable in a class component.
          <br /> <br />
          'useRef' can also be used to store other mutable values that persist
          between renders. Because the value stored in a'useRef' object does not
          cause the component to re-render when it is updated, it can be used to
          store values that don't need to trigger a re-render.
        </p>
      </blockquote>

      <blockquote className=" border-2 p-5 my-5">
        <h3 className=" font-semibold text-2xl">What is 'useMemo'?</h3>
        <p>
          <br />
          'useMemo' is a hook in React that allows you to memoize the result of
          a function or computation, so that it is only re-calculated when
          necessary. This can help improve the performance of your application
          by avoiding unnecessary re-calculations.
          <br />
          <br /> The 'useMemo' hook takes two arguments: a function that returns
          the computed value, and an array of dependencies that the function
          depends on. If any of the dependencies change, the function is
          re-executed and the new value is returned. If none of the dependencies
          change, the previously computed value is returned.
        </p>
      </blockquote>
    </div>
  );
};

export default Blog;
