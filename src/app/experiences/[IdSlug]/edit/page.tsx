'use client'
import React, { useEffect, useState } from 'react';

//API 
import { getSingleExperience, updateExperience } from '@/services/API';

//UTILS
import { ButtonVariant, ExperienceSchema, ExperienceType } from '@/utils/TYPES';

//ETC
import { useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//Components
import MessageComponent from '@/components/_molecules/Message';
import FormComponent from '@/components/_organisms/Form';
import ButtonComponent from '@/components/_atoms/Button';
import Link from 'next/link';
import LoaderComponent from '@/components/_molecules/Loader';


type FormValues = z.infer<typeof ExperienceSchema>;

const EditExperiencePage = ({ params }: any) => {
    const id = params.IdSlug;

    const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['get-single-experience-edit', id],
        queryFn: () => getSingleExperience(id),
        staleTime: 0, 
    });

    const [isFormSend, setFormSend] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(ExperienceSchema),
        defaultValues: {
            title: '',
            description: '',
            rating: 0,
            imageUrl: '',
        },
    });
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;

    useEffect(() => {
        if (data) {
            reset({
                title: data.title,
                description: data.description,
                rating: data.rating,
                imageUrl: data.imageUrl,
            });
        }
    }, [data, reset]);

    const mutationSendForm = useMutation({
        mutationFn: (experience: ExperienceType) => updateExperience(experience),
        onSuccess: () => {
            // Refetch the data after successful update
            refetch();
        },
        onError: (error) => {
            //Handling error - either displaying it in console or
        },
    });

    const handleClickRetry = () => {
        setFormSend(false);
        reset();
    }

    const successContent = (
        <MessageComponent message='Experience has been updated.' containerStyling={false}>
            <Link href='/experiences'>
                <ButtonComponent variant={ButtonVariant.enum.action}>Go to experiences</ButtonComponent>
            </Link>
        </MessageComponent>
    );

    const errorContent = (
        <MessageComponent message={mutationSendForm.error?.message} containerStyling={false} isError={true}>
            <Link href='/experiences'>
                <ButtonComponent variant={ButtonVariant.enum.action}>Go to experiences</ButtonComponent>
            </Link>
            <ButtonComponent variant={ButtonVariant.enum.primary} onClick={handleClickRetry}>Try again</ButtonComponent>
        </MessageComponent>
    );

    const onSubmit = (data: FormValues) => {
        const experience: ExperienceType = {
            title: data.title,
            description: data.description,
            rating: Number(data.rating),
            imageUrl: data.imageUrl,
            id: id,
        };

        setFormSend(true);
        mutationSendForm.mutate(experience);
    };

    return (
        <div className='mt-[100px] relative px-[20px] md:px-[0px]'>
            <div className='new-experience-page mx-auto mt-6 bg-secondary/90 lg:max-w-[50%] container p-6'>
                {isFormSend ? (
                    <div className='h-[570px] flex justify-center items-center'>
                        {mutationSendForm.isPending ? <LoaderComponent text='Updating experience...' /> :
                            mutationSendForm.isSuccess ? successContent : mutationSendForm.isError ? errorContent : null
                        }
                    </div>
                ) : isFetching ? <LoaderComponent /> : <FormComponent
                    onSubmit={handleSubmit(onSubmit)}
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    form={form}>
                        <ButtonComponent variant={ButtonVariant.enum.action}>Update Experience</ButtonComponent>
                </FormComponent>
                }
            </div>
        </div>
    );
};

export default EditExperiencePage;