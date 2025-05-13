import React from 'react'
import QuotesScroller from '../Quotes/Quotes';
const Interest = () => {
  return (
    <>
      <div className="h-[200px] hidden md:block mt-10 bg-[#dedede]">
        <div
          id="row-1"
          className="flex justify-center gap-[200px] pt-5 text-3xl dark-accent-color heading italic"
        >
          <div>Machine Learning</div>
          <div>Data Science</div>
          <div>Artificial Intelligence</div>
        </div>
        <div
          id="row-1"
          className="flex justify-center gap-[150px] pt-10 text-3xl dark-accent-color heading italic"
        >
          <div>Programming</div>
          <div>Internet of Things</div>
          <div>Software Testing</div>
          <div>Data Structure</div>
        </div>
      </div>
      <div className="block md:hidden mt-10">
        <hr className="w-full h-1 border-none bg-[#FE7743] my-4" />
        <QuotesScroller></QuotesScroller>
        <hr className="w-full h-1 border-none bg-[#FE7743] my-4" />
      </div>
    </>
  );
}

export default Interest