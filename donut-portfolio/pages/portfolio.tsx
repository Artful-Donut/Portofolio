import { useState, useEffect } from 'react'
import Layout from '../src/components/layout'
import { BloggerPostList, BloggerPost } from '@/src/library/blogger_api_types'
import DOMpurify from 'dompurify'

// I used this tutorial help :p https://dev.to/dhrumitdk/how-to-create-and-consume-a-rest-api-in-nextjs-2c6a 
// Tutorial for html injection https://dev.to/joshydev/safely-handling-html-in-react-ba
// Possible way to style? https://stackoverflow.com/questions/53539885/how-to-pass-style-using-dangerouslysetinnerhtml-in-react

// Filter types
type FilterTypes = 'game' | 'project' | 'art'
const viableFilters: FilterTypes[] = ['game', 'project', 'art']
// Custom type guard
const isFilter = (x: any): x is FilterTypes => viableFilters.includes(x);

function Portfolio() {
  const [postList, setPostList] = useState<BloggerPostList | undefined>(undefined);
  const [posts, setPosts] = useState<BloggerPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BloggerPost[]>([]);
  const [filters, setFilters] = useState<FilterTypes[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/5307096598116342288/posts?key=AIzaSyBpPR8MSOtRsFQ4r2InPL56GDLdrEOlUkY')
      const data = await res.json();

      await setPostList(data);
      // console.log(posts);
    }

    fetchPosts();
  }, []);

  // for setting posts
  useEffect(() => {
    setPosts(postList ? postList.items.filter((post) => post.labels?.includes("portfolio")) : []);
    setFilteredPosts(postList ? postList.items.filter((post) => post.labels?.includes("portfolio")) : [])
  }, [postList]);

  // For setting filters
  useEffect(() => {
    setFilteredPosts(posts?.filter((post) =>
      post.labels.some((label) => isFilter(label) ? filters.includes(label) : false)))
    if (filters.length == 0) setFilteredPosts(posts)
  }, [filters]);


  const handleSetFilter = (label: FilterTypes) => {
    setFilters((prevFilters) => prevFilters.includes(label) ?
      prevFilters.filter((filter) => filter != label) : [...prevFilters, label]);
  }

  return (
    <Layout
      infoWidgetBelowContent={
        <div id='filters' className='flex flex-col items-start w-3/4 my-1 mt-3 ml-5'>
          <p className='mb-1 mx-2 font-bold text-xl text-grape'>Filter by:</p>
          <hr className='w-full border-2 rounded-2xl text-grape opacity-50 place-self-center' />

          <div id='filter checkboxes' className='my-4 ml-5'>
            {viableFilters.map((filter, index) => {
              const isActive = filters.includes(filter);
              return (
                <div id='filter button' key={index} className='flex mb-2'>
                  <span id='checkbox' style={{ backgroundColor: isActive ? '#df9ca4' : 'transparent' }}
                    onClick={() => {
                      //console.log(filter + "box has been clicked!")
                      handleSetFilter(filter);
                    }}
                    className='p-3 border-3 rounded-md border-grape
                              hover:opacity-75 active:border-cream cursor-pointer duration-100'/>
                  <p className='ml-2 font-medium text-grape'>{filter[0].toLocaleUpperCase() + filter.slice(1)}</p>
                </div>
              )
            }
            )}
          </div>
        </div>
      }
      children={
        <div id='post list' className='grid w-3/4'>
          {posts && filteredPosts.map((post, index) => {
            const sanitizedHTML = DOMpurify.sanitize(post.content);
            const date = post.published.slice(0, 10).replaceAll('-', '.');
            const usedLabels = post.labels.filter((label) => isFilter(label))

            return (
              <div id='individual post' key={index} className='flex flex-col lg:w-1/2 w-2/3 basis-1/2 m-1 p-4 border-4 border-rose rounded-3xl 
              hover:shadow-xl hover:shadow-rose hover:basis-2/3 duration-100 wrap-anywhere'>
                <div id='title spot' className='flex xl:flex-row lg:justify-between xl:items-end mb-1 flex-col items-start'>
                  <span id='date' className='flex items-center text-rose'>
                    <p>date: </p>
                    <p className='opacity-50 text-lg'>{date}</p>
                  </span>
                  <a href={post.url} target='_blank'>
                    <span className='text-soda lg:text-center text-lg cursor-pointer hover:text-xl hover:font-semibold hover:opacity-75 duration-200'>{post.title}</span>
                  </a>
                  <span id='tags' className=''>
                    {usedLabels.map((label: FilterTypes, index) =>
                      <p onClick={() => handleSetFilter(label)} key={index}
                        className='m-1 px-2 py-1 rounded-2xl bg-rose backdrop-opacity-50 text-xs text-center align-middle
                        hover:opacity-75 cursor-pointer'>{label}</p>)
                    }
                  </span>
                </div>
                <hr className='border rounded-2xl text-grape opacity-50' />
                <div id='post content' className='text-amaranth'
                  dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
              </div>
            )
          }
          )}
        </div>

      } />
  )
}

export default Portfolio