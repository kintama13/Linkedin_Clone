import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "../features/searchSlice";



const Search = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    // const location = useLocation();

    const { jobTitle } = useParams();

    const jobs = useSelector((state) => state.search.searchs);

    useEffect(() => {
        if(jobTitle) {
            dispatch(getSearch(jobTitle));
        } else {
            console.log("Error");
        }
    }, [dispatch, jobTitle]);

  return (
    <div className='container'>
        <div className='wrapper__jobs flex justify-center my-8'>
        <div className='main__content border border-gray-200 flex flex-col rounded-lg pl-4 w-[600px] py-4 mx-4'>
            <div className='label__jobs mb-8'>
                <h1 className='text-2xl font-semibold'>Recommended For You</h1>
                <p className='text-sm font-light'>Based on your profile and history</p>
            </div>
                { jobs && jobs.map((item) => {
                    return (
                        <div key={item.id} className='card__jobs flex cursor-pointer mb-8'>
                            <div className='img__jobs'>
                                <img className='w-[66px] rounded-full' src={`https://ui-avatars.com/api/?name=${item.posterJob}`} alt=''/>
                            </div>
                            <div className='flex w-[500px] ml-2 justify-between'>
                                <div className='jobs__information'>
                                    <p className='font-semibold text-blue-600 hover:text-blue-500 hover:underline text-lg'>{item.jobTitle}</p>
                                    <p className='text-sm font-normal'>{item.jobRole}</p>
                                    <p className='text-sm text-gray-400'>{item.area}</p>
                                </div>
                            </div>
                        </div>
                    )
                }) }
                    
                    
        </div>
            {/* <div className='card__jobs border border-gray-500 w-[500px] py-4'>
                <p>Jobs</p>
                <p>Jobs</p>
                <p>Jobs</p>
                <p>Jobs</p>
            </div> */}
            
        </div>
    </div>
  )
}

export default Search;