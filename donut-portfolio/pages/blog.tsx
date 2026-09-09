import React from 'react'
import Layout from '@/src/components/layout'
function Blog() {
  return (
    <Layout 
      infoWidgetBelowContent={<></>}
      children={
        <div className='text-center'>
          <p className='text-soda text-lg'>Under Construction!</p>
          <a className='text-rose hover:opacity-50 duration-100' href='https://donuts4evry1.blogspot.com/search/label/blog'>(you can view my blog posts here)</a>
        </div>
      }
    />
  )
}

export default Blog