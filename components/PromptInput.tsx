import React from 'react'

function PromptInput() {
  return (
    <div className='m-10 text-primary_text'>   
      <form className='flex flex-col lg:flex-row shadow-md  rounded-full md:space-x-3 md:space-y-0 space-y-5' >
        <textarea className='flex-1 outline-none rounded-full bg-second p-5 flex items-center ' name="" id="" />
        <button className='rounded-full bg-second text-sm py-2 px-4'>Generate</button>
        <button className='rounded-full text-primary font-bold items-center bg-brand text-sm py-2 px-4'>Use Suggestions</button>
        <button className='rounded-full bg-second text-sm py-2 px-4'>New Suggestions</button>
      </form>
    </div>
  )
}

export default PromptInput
