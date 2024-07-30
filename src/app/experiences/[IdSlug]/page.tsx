'use client'
import React from 'react';

//API
import {
    StarIcon,
    ArrowLongLeftIcon,
  }  from '@heroicons/react/20/solid'

import { getSingleExperience } from '@/services/API';

//ETC.
import { useQuery } from '@tanstack/react-query';

//Components
import { ButtonVariant } from '@/utils/TYPES';
import Link from 'next/link';
import ButtonComponent from '@/components/_atoms/Button';
import SkeletonItemComponent from '@/components/_atoms/SkeletonItem';
import MessageComponent from '@/components/_molecules/Message';

const ExactExperiencePage = ({params} : any) => {
    const id = params.IdSlug;

    const { data, error, isError, isFetching } = useQuery({
        queryKey: ['get-single-experience', id],
        queryFn: () => getSingleExperience(id),
    });

    return (
        isError ? (
            <MessageComponent message={error.message} isError={true}>
                <Link href='/experiences'>
                    <ButtonComponent variant={ButtonVariant.enum.action}>Go to experiences</ButtonComponent>
                </Link>
            </MessageComponent>
        ) : (
            <article className='experience-container md:mt-[110px] mt-12 mx-6'>
                <div className='fixed z-[-2] left-0 top-0 w-[100vw] h-[100vh] bg-black pointer-events-none'/>
                {isFetching ? null : <img src={data?.imageUrl} alt={`background ${data?.title}`} className='fixed z-[-1] left-0 top-0 h-[100vh] w-[100vw] animate-ping pointer-events-none opacity-50 blur-sm'/>}
                
                <div className='details-container container bg-secondary/70 mt-6 md:flex flex-row relative'>
                    <div className='absolute top-[-20px] left-[20px] z-10'>
                        <Link href='/experiences'>
                            <ButtonComponent variant={ButtonVariant.enum.action}>
                                <ArrowLongLeftIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-white" />
                                Go Back
                            </ButtonComponent>
                        </Link>
                    </div>
                    {isFetching ? <SkeletonItemComponent className='basis-1/2 h-[278px] md:h-[486px]'/> : <img src={data?.imageUrl} alt={data?.title} className='basis-1/2 min-w-[250px] max-h-[60vh] object-cover'/>}
                    <div className='content-container flex-grow md:px-12 md:py-[100px] py-6 flex flex-col items-center'>
                        <h1 className='text-white text-4xl'>{isFetching ? <SkeletonItemComponent className='h-[40px] w-[100px] rounded-3xl'/> : data?.title}</h1>
                        { isFetching ? <SkeletonItemComponent className='mt-2 h-[32px] w-[130px] rounded-3xl'/> : (
                            <div className="mt-2 flex items-center">
                                <StarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                                <p className='inline text-white'>Rating: {data?.rating} </p>
                            </div>
                        )} 
                        <div className='flex flex-col justify-between flex-grow'>
                            { isFetching  ? <SkeletonItemComponent className='mt-[60px] h-[50px] w-[300px] max-w-[100%] rounded-3xl'/>  : (
                                <p className='text-white mt-[60px]'>
                                    {data?.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </article> 
        )

    );
}
 
export default ExactExperiencePage;