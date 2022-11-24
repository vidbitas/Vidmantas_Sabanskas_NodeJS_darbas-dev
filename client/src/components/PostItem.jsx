import React from 'react';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const PostItem = ({ post, loginUserName }) => {
  if (!post) {
    return;
    // return (
    //   <div className='text-xl text-center text-white py-10'>Loading111...</div>
    // );
  }
  // console.log('PostItem.jsx post === ', loginUserName, post);
  return (
    // <Link to={`/${post._id}`}>
    <Link to={loginUserName ? `/${post._id}` : ''}>
      <div className='flex flex-row gap-5 basis-1/4 px-5 border-2 pt-5 pb-5 rounded-r-3xl'>
        <div className='w-1/2'>
          <div
            className={
              post.imgUrl ? 'flex rouded-sm h-80' : 'flex rounded-sm w-fit'
            }
          >
            {/* {post.imgUrl && (
              <img
                src={`http://localhost:5000/${post.imgUrl}`}
                alt='img'
                className='object-cover w-full'
              />
            )} */}
            {post.imgUrl2 && (
              <div className='flex rouded-sm h-40 w-70 grow'>
                <img src={post.imgUrl2} alt='img' className='object-fill' />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col w-1/2 justify-between'>
          <div>
            <div className='flex justify-between items-center pt-2'>
              <div className='text-xs text-white opacity-50'>
                {post.username}
              </div>
              <div className='text-xs text-white opacity-50'>
                <Moment date={post.createdAt} format='D MMM YYYY' />
              </div>
            </div>
            <div className='text-white text-xl'>{post.title}</div>
            <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>
              {post.text}
            </p>
          </div>
          <div className='flex gap-3 items-center mt-2'>
            <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
              <AiFillEye /> <span>{post.views} VIEWS</span>
            </button>
            <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
              <AiOutlineMessage />{' '}
              <span>{post.comments?.length || 0} LIKES</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
