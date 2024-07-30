
import * as React from 'react';

//ETC
import {
    StarIcon,
    PencilIcon,
    TrashIcon,
  } from '@heroicons/react/20/solid'

//Utils
import { ButtonVariant } from '@/utils/TYPES';

//Components
import ButtonComponent from '../_atoms/Button';
import Link from 'next/link';
import LoaderComponent from './Loader';
import { useState } from 'react';

type ExperienceItemProps = {
    id: string,
    title: string,
    rating: number,
    description: string,
    imageUrl: string,
    handleDeleteExperience: (arg0 : string) => void,
}

const ExperienceItem = ( { id, title, rating, handleDeleteExperience } : ExperienceItemProps) => {
    const [disabled, setDisabled] = useState(false);

    const handleExperienceItemClicked = (id : string) => {
        handleDeleteExperience(id);
        setDisabled(true);
    }

    return (
        <li className={`experience-item border-t border-gray-300/10 md:border-t-0  transition-all relative ${!disabled ? 'md:hover:bg-primary/10' : null}`}>
            { disabled ? (<div className='absolute left-0 top-0 bg-gray-900/40 w-[100%] h-[100%] z-1 flex items-center justify-center '>
                <LoaderComponent text='Deleting experience...'/>
            </div>) : null}
            <div className="md:flex items-center justify-between py-6 px-8">
                <div className="min-w-0 flex flex-row gap-[40px] justify-center md:justify-start">
                    <div className='flex flex-col md:items-start justify-center items-center'>
                        <h2 className="text-[54px] text-white sm:truncate sm:text-3xl sm:tracking-tight inline">
                            {title}
                        </h2>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center">
                                <StarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                                <p className='inline text-white'>Rating: {rating} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0 justify-center md:justify-start">
                <div className="hidden sm:block"></div>
                <div className="flex">
                    <Link className='mr-1' href={`/experiences/${id}`}>
                        <ButtonComponent variant={ButtonVariant.enum.primary}>
                            Read More
                        </ButtonComponent>
                    </Link>
                    <Link href={`/experiences/${id}/edit`}>
                        <ButtonComponent variant={ButtonVariant.enum.secondary}>
                            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-white" />
                            Edit
                        </ButtonComponent>
                    </Link>
                    <ButtonComponent variant={ButtonVariant.enum.secondary} onClick={() => handleExperienceItemClicked(id)}>
                        <TrashIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-white" />
                            Delete
                    </ButtonComponent>
                </div>
                </div>
            </div>
        </li>
    );
}
 
export default ExperienceItem;