import React from 'react';

const Blog = () => {
    return (
    <div>
        <h3 className='pb-4 border-b-4 border-[#5D5FEF] w-3/12 m-auto text-center text-3xl mt-4 sm:mt-10 font-semibold'>Blog</h3>
        <div className='w-10/12 lg:w-7/12 m-auto p-3 my-10 border rounded-lg'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                How does react work?
            </div>
            <div className="collapse-content"> 
    <           p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.
                </p> 
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Difference between props and state?
            </div>
            <div className="collapse-content"> 
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                What does UseEffect do other than loading in react?
            </div>
            <div className="collapse-content"> 
                <p> UseEffect manages the side-effects in functional components,Directly updating the DOM, and timers</p>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Blog;