'use client'
import React from 'react';

//API
import { deleteExperience, getExperienceList } from '@/services/API';

//ETC.
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


//Utils
import { ButtonVariant, ExperienceType } from '@/utils/TYPES';

//Components
import MessageComponent from '@/components/_molecules/Message';
import LoaderComponent from '@/components/_molecules/Loader';
import ButtonComponent from '@/components/_atoms/Button';
import ExperienceItem from '@/components/_molecules/ExperienceItem';
import Link from 'next/link';


const ExperiencePage = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { data, error, isSuccess, isFetching, isError } = useQuery({
        queryKey: ['get-experience-list'],
        queryFn: getExperienceList,
    });

    const mutation = useMutation({
        mutationFn: deleteExperience,
        onSuccess: () => {
            //@ts-ignore
            queryClient.invalidateQueries(['get-experience-list']);
        },
    });

    const handleDeleteExperience = (experienceId: string) => {
        mutation.mutate(experienceId);
    };

    const handleTryAgainClicked = () => {
        //additional actions
        router.refresh();
    }

    if (isError) {
        return (
            <MessageComponent message={error.message} isError={true}>
                <ButtonComponent variant={ButtonVariant.enum.action} onClick={handleTryAgainClicked}>Try again</ButtonComponent>
            </MessageComponent>
        );
    }

    let renderedExperienceList = isSuccess && data.map((experience: ExperienceType) => (
        <ExperienceItem
            key={experience.id}
            id={experience.id}
            title={experience.title}
            description={experience.description}
            rating={experience.rating}
            imageUrl={experience.imageUrl}
            handleDeleteExperience={handleDeleteExperience}
        />
    ));

    return (
        <div className='experience-page my-[100px] px-[20px] md:px-[0px]'>
            <div className={`experiences-container container mt-6 bg-secondary/70 ${!isFetching ? 'md:pt-[120px] md:pb-[44px]' : null}  relative overflow-hidden transition-all`}>
                { isFetching ? (
                    <div className='mt-6 mb-6'>
                        <LoaderComponent/>
                    </div>
                ) : (
                    <>
                        <div className='md:absolute md:right-[44px] md:top-[44px] rounded-lg flex flex-grow items-center p-6 md:p-[initial] justify-between'>
                            <Link href={'/experiences/new'} className='mx-auto'>
                                <ButtonComponent variant={ButtonVariant.enum.action}>
                                    Add Experience
                                </ButtonComponent>
                            </Link>
                        </div>
                        {isSuccess && data.length === 0 ? (
                            <div className='flex justify-center items-center mt-[60px] pb-[44px]'>
                                <p className='text-base'>There are currently no experiences</p>
                            </div>
                        ) : (
                        <ul className='flex flex-col flex-wrap'>
                            {renderedExperienceList}
                        </ul>
                        )}

                    </>
                )}
            </div>
        </div>
    );
};

export default ExperiencePage;