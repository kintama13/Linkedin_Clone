import React, { useEffect } from 'react';
import { 
    Notifications, Bookmark, 
    AssignmentTurnedIn, StickyNote2, BookmarkBorderOutlined,
    DescriptionOutlined, YouTube, Settings, ArrowForward,
} from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import { recJobs } from "../features/jobSlice";
import { useNavigate } from "react-router-dom"


const JobsNav = () => {
    const dispatch = useDispatch();
    const jobsRecomend = useSelector((state) => state.recomend.recomend);

    useEffect(() => {
        dispatch(recJobs());
    }, [dispatch])

  return (
    <div className='container'>
        <div className='wrapper__content flex justify-between mx-32 mt-12 pb-12'>
        <div className='sidebar__main flex flex-col border border-gray-200 rounded-lg px-12 py-4 h-[400px]'>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <Bookmark className='mr-1'/>
                My Jobs
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <Notifications className='mr-1' />
                Jobs Alerts
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <AssignmentTurnedIn className='mr-1' />
                Skill Assessments
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <StickyNote2 className='mr-1' />
                Interview prep
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <DescriptionOutlined className='mr-1' />
                Resume Builder
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <YouTube className='mr-1' />
                Job seeker guidance
            </p>
            <p className='font-semibold text-base my-3 cursor-pointer'>
                <Settings className='mr-1' />
                Application settings
            </p>
        </div>
        <div className='main__content border border-gray-200 flex flex-col rounded-lg pl-4 w-[600px] py-4 mx-4'>
            <div className='label__jobs mb-8'>
                <h1 className='text-2xl font-semibold'>Recommended For You</h1>
                <p className='text-sm font-light'>Based on your profile and history</p>
            </div>
            { jobsRecomend && jobsRecomend.map((item) => {
                return (
                    <div  key={item.id} className='card__jobs flex cursor-pointer mb-8'>
                        <div className='img__jobs'>
                            <img className='w-[66px] rounded-full' src={`https://ui-avatars.com/api/?name=${item.companyName}`} alt=''/>
                        </div>
                        <div className='flex w-[500px] ml-2 justify-between'>
                            <div className='jobs__information'>
                                <p className='font-semibold text-blue-600 hover:text-blue-500 hover:underline text-lg'>{item.jobsRec}</p>
                                <p className='text-sm font-normal'>{item.jobsRole}</p>
                                <p className='text-sm text-gray-400'>{item.area}</p>
                            </div>
                            <div className='mr-4'>
                                <BookmarkBorderOutlined/>
                            </div>    
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='widget__main flex flex-col border border-gray-200 rounded-lg px-12 py-4 w-80 h-72'>
            <div className='info1 mb-4'>
                <h2 className='font-bold text-xl'>Ready to work</h2>
                <p className=' font-light text-sm'>Recommended based on your activity</p>
            </div>
            <div className='info2 mb-4'>
                <h4 className='text-base font-semibold'>I want to Improve my resume</h4>
            </div>
            <div className='info3 mb-4'>
                <p>Lorem ipsum dolor sit amet, consectetur  ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className='info4 mb-4 cursor-pointer'>
                <p className='text-gray-500'>Show more
                    <ArrowForward fontSize='medium'/>
                </p>
            </div>
        </div>
        </div>
        
    </div>
    // <div className='wrapper__jobs flex'>
    //     <div className='sidebar__content flex flex-col'>
    //         <p>Recent</p>
    //         <p>Recent</p>
    //         <p>Recent</p>
    //         <p>Recent</p>
    //     </div>
    //     <div className='main__content'>
    //         <p>Main</p>
    //     </div>
    //     <div className='widget__content'>
    //         <p>Widget</p>
    //     </div>
    // </div>
    
  )
}

export default JobsNav;