import React from 'react'
import spotifyLogo from '../assets/spotify_logo.png'; // Adjust the path as needed
function Sidebar() {
const PlaylistData=[{
    id: 0,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 1,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 2,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 3,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 4,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 5,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 6,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 7,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 8,
    name: "Liked Songs",
    img:spotifyLogo,
},
{
    id: 9,
    name: "Liked Songs",
    img:spotifyLogo,
}];

    return (
        <div className='w-[26%] h-[89vh] p-3 px-1.5 flex-col  text-slate-300  hidden lg:flex '>
            <div className="bg-[#121212] p-3 h-[25%] rounded-t-lg flex flex-col justify-around  ">
                <div className='flex gap-5 p-3 items-center'>
                    <i className="fa-regular fa-folder-open text-2xl cursor-pointer"></i> <h1 className='text-base font-semibold cursor-pointer'>Your Library</h1>
                    <i className="fa-solid fa-plus mx-9  cursor-pointer"></i>
                    <i className="fa-solid fa-arrow-right -mx-9 cursor-pointer"></i>
                </div>
                <div className=' flex gap-2 bg-[#121212] items-center'>
                    <button className='rounded-3xl bg-[#333333] text-white text-sm px-4 py-2'>Playlists</button>
                    <button className='rounded-3xl bg-[#333333] text-white text-sm px-5 py-2'>Artists</button>
                </div>
            </div>
            <div className='bg-[#121212] h-full overflow-y-scroll  flex flex-col' >
                <div className='bg-[#121212] p-3 flex justify-between items-center'>
                    <i className="fa-solid fa-magnifying-glass  cursor-pointer"></i>
                    <p className='font-semibold cursor-pointer'> Recents<i className="fa-solid fa-list mx-2"></i></p>
                </div>
                <div className=''>

                   {PlaylistData.map((e)=>{
                    return(
                        <div key={e.id} className='rounded  p-3 flex gap-3 items-center hover:bg-[#374151] hover:rounded-sm'>
                        <div className='w-10' >
                            <img src={e.img} className='h-full ' />
                        </div>
                        <div className='w-[80%] flex flex-col'>

                            <strong>{e.name}</strong>
                            <p className='text-sm font-medium'><i className="fa-solid fa-thumbtack text-green-500 "></i>  Playlist . 38 songs</p>
                        </div>
                    </div>
                    );
                   })}
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Sidebar
