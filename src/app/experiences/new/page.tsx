'use client'
import React, { useState } from 'react';

//ETC
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

// API
import { postExperience } from '@/services/API';

// Utils
import { ButtonVariant, ExperienceSchema, ExperienceType } from '@/utils/TYPES';

// Components
import LoaderComponent from '@/components/_molecules/Loader';
import FormComponent from '@/components/_organisms/Form';
import ButtonComponent from '@/components/_atoms/Button';
import Link from 'next/link';
import MessageComponent from '@/components/_molecules/Message';

type FormValues = z.infer<typeof ExperienceSchema>;

const NewExperiencePage = () => {
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

    const mutationSendForm = useMutation({
        mutationFn: (newExperience : ExperienceType) => postExperience(newExperience),
        onSuccess: () => {
            //Handling success
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
        <MessageComponent message='Experience has been created.' containerStyling={false}>
            <Link href='/experiences'>
                <ButtonComponent variant={ButtonVariant.enum.action}>Go to experiences</ButtonComponent>
            </Link>
            <ButtonComponent variant={ButtonVariant.enum.primary} onClick={handleClickRetry}>Create another</ButtonComponent>
        </MessageComponent>
    )

    const errorContent = (
        <MessageComponent message={mutationSendForm.error?.message} containerStyling={false} isError={true}>
            <Link href='/experiences'>
                <ButtonComponent variant={ButtonVariant.enum.action}>Go to experiences</ButtonComponent>
            </Link>
            <ButtonComponent variant={ButtonVariant.enum.primary} onClick={handleClickRetry}>Try again</ButtonComponent>
        </MessageComponent>
    )

    const onSubmit = (data: FormValues) => {
        const newExperience: ExperienceType = {
            title: data.title,
            description: data.description,
            rating: Number(data.rating),
            imageUrl: data.imageUrl,
            id: Math.random().toString(),
        };

        setFormSend(true);
        mutationSendForm.mutate(newExperience);
    };

    return (
        <div className='mt-[100px] relative px-[20px] md:px-[0px]'>
            <div className='new-experience-page mx-auto mt-6 bg-secondary/90 lg:max-w-[50%] container p-6'>
            { isFormSend ? (
                <div className='h-[570px] flex justify-center items-center animate-ping'>
                    { mutationSendForm.isPending ? <LoaderComponent text='Creating new experience...'/> : 
                        mutationSendForm.isSuccess ? successContent : mutationSendForm.isError ? errorContent : null
                    } 
                </div> 
            ) : <FormComponent 
                onSubmit={handleSubmit(onSubmit)} 
                handleSubmit={handleSubmit} 
                register={register} 
                errors={errors} 
                form={form} 
                >
                    <ButtonComponent variant={ButtonVariant.enum.action}>Add Experience</ButtonComponent>
                    <ButtonComponent variant={ButtonVariant.enum.primary} type={'reset'}>Reset</ButtonComponent>
                </FormComponent>
            }
            </div>
        </div>
    );
};

export default NewExperiencePage;