import React from 'react';

const Blog = () => {
  return (
    <div className='py-14 '>
      <div className='py-8 w-[80%] mx-auto '>
        <div className='mb-10 bg-gray-200 p-8 rounded-xl'>
          <h1 className='text-2xl font-bold '>1 When use Context API ?</h1>
          <h4 className='text-xl'><span className='text-green-600 font-bold'>Ans:</span> The Context API is particularly useful when you have a component hierarchy where data needs to be passed down through several levels of components. Instead of having to pass the data through each level of the hierarchy, you can use the Context API to provide the data at a higher level and allow all components in the subtree to access it.</h4>
        </div>
        <div className='mb-10 bg-gray-200 p-8 rounded-xl'>
          <h1 className='text-2xl font-bold'> 2 What is custom hook ?</h1>
          <h4 className='text-xl'><span className='text-green-600 font-bold'>Ans:</span> A Custom Hook is in fact this. A window-programming-interface to expose states and actions and simplify the code.Custom hooks start with the word "use", just like the built-in hooks in React</h4>
        </div>
        <div className='mb-10 bg-gray-200 p-8 rounded-xl'>
          <h1 className='text-2xl font-bold'>3 What is UseRef ?</h1>
          <h4 className='text-xl'><span className='text-green-600 font-bold'>Ans:</span> The useRef hook can be used to get a reference to a DOM element, manage the focus of an input element, and persist data across re-renders without causing a re-render</h4>
        </div>
        <div className='mb-10 bg-gray-200 p-8 rounded-xl'>
          <h1 className='text-2xl font-bold'>4 What is UseMemo ?</h1>
          <h4 className='text-xl'><span className='text-green-600 font-bold'>Ans:</span> The useMemo hook takes two arguments: a function that computes the value to memoize, and an array of dependencies that determine when the value should be re-computed. The function is only re-computed when one or more of the dependencies change.</h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;