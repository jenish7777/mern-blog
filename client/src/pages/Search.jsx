import { Button, Select, TextInput } from 'flowbite-react'
import  { useEffect, useState } from 'react'
import  { useLocation, useNavigate} from "react-router-dom"
import PostCard from "../componets/PostCard"

export default function Search() {
    const [sidebarData,setSidebarData]=useState({
        searchTerm:"",
        sort:"desc",
        category:"uncategorized"
    });
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [showMore,setShowMore]=useState(false);
    const location =useLocation();
    const navigate=useNavigate()
    useEffect(()=>{
        const urlParms=new URLSearchParams(location.search)
        const searchTermFromUrl = urlParms.get("searchTerm");
        const sortFromUrl = urlParms.get("sort");
        const categoryFromUrl = urlParms.get("category");
        if(searchTermFromUrl || sortFromUrl || categoryFromUrl){
            setSidebarData({
               ...sidebarData,
                searchTerm:searchTermFromUrl,
                sort:sortFromUrl,
                category:categoryFromUrl
            })
        }

        const fetchPosts=async ()=>{
            setLoading(true);
            try{
                const searchQuery = urlParms.toString();
                const res=await fetch(`/api/post/getposts?${searchQuery}`);
                if(!res.ok){
                    setLoading(false);
                    return;
                }
                if(res.ok){
                    const data=await res.json();
                    setPosts(data.posts);
                    setLoading(false);
                }

                if(data.posts.length === 9){
                    setShowMore(true);
                }else{
                    setShowMore(false);
                }

            }catch(err){
                console.log(err)
            }
        }
        fetchPosts();

    },[location.search])

    const handleChange = (e)=>{
        if(e.target.id === "searchTerm"){
            setSidebarData({...sidebarData , searchTerm:e.target.value})
        }
        if(e.target.id === "sort"){
            const order = e.target.value || "desc";
            setSidebarData({...sidebarData , sort:order})
        }
        if(e.target.id === "category"){
            const category = e.target.value || "uncategorized"
            setSidebarData({...sidebarData , category:category})
        }

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const urlParms=new URLSearchParams(location.search)
       urlParms.set("searchTerm",sidebarData.searchTerm);
       urlParms.set("sort",sidebarData.sort);
       urlParms.set("category",sidebarData.category);

       const searchQuery = urlParms.toString();
       navigate(`/search?${searchQuery}`)

        }

const handleShowMore = async ()=>{
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParms = new URLSearchParams(location.search);
    urlParms.set("startIndex",startIndex);
    const searchQuery = urlParms.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if(!res.ok){
        return;
    }
    if(res.ok){
        const data = await res.json();
        setPosts((prev)=>[...prev, ...data.posts])
        if(data.posts.length === 9){
            setShowMore(true);
        }else{
            setShowMore(false);
        }
    }

}
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form  className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
                <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                <TextInput placeholder='Search...'
                id='searchTerm'
                type='text'
                value={sidebarData.searchTerm}
                onChange={handleChange}/>
            </div>
            <div className="flex item-center gap-2">
                <label className='font-semibold'>Sort:</label>
                <Select onChange={handleChange} value={sidebarData.sort} id="sort">
                    <option value="desc">Latest</option>
                    <option value="asc">oldest</option>
                </Select>
            </div>
            <div className="flex item-center gap-2">
                <label className='font-semibold'>Category:</label>
                <Select onChange={handleChange} value={sidebarData.category} id="category">
                    <option value="uncategorized">Uncategorized</option>
                    <option value="reactjs">ReactJs</option>
                    <option value="javascript">Java Script</option>
                    <option value="nextjs">Nextjs</option>
                </Select>
            </div>
            <Button type='submit' outline gradientDuoTone="purpleToPink">
                Apply Filters
            </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5'>Posts results:</h1>
        <div className="p-7 flex flex-warp gap-4">
            {
                !loading && posts.length === 0 && (
                    <p className='text-xl text-gray-500'>No Posts Found</p>
                )
            }
            {
                loading && 
                    <p className='text-xl text-gray-500'>
                        Loading...
                    </p>
            }
            {
                !loading && posts.length > 0 && (
                    <div className="flex flex-wrap gap-4 p-7">
                        {
                             posts.map((post)=>(
                                <PostCard key={post._id} post={post} />
                            ))

                        }
                    </div>
                       
                )
            }

            {
                showMore &&  <button 
                onClick={handleShowMore}
                className='text-teal-500 text-lg hover:underline p-7 w-full'>
                    Show More
                </button>
            }
        </div>
      </div>
    </div>
  )
}
