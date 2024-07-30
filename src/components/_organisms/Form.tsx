import * as React from 'react';

//ETC.
import { FieldErrors, FormProvider, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

//Utils
import { ExperienceSchema, InputVariant } from '@/utils/TYPES';

//Components
import InputComponent from '../_atoms/Input';
import RatingComponent from '../_molecules/Rating';

type FormValues = z.infer<typeof ExperienceSchema>;

type FormComponentProps = {
    form: any,
    handleSubmit: UseFormHandleSubmit<FormValues, undefined>,
    onSubmit: any,
    register: UseFormRegister<FormValues>,
    errors: FieldErrors<FormValues>,
    children: React.ReactNode
}

const FormComponent = ({ form, handleSubmit, onSubmit, register, errors, children }: FormComponentProps) => {
    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col' noValidate>
                <InputComponent htmlFor={'title'} id={'title'} register={register} error={errors.title?.message} inputTitle={'Title'} />
                <InputComponent variant={InputVariant.enum.textarea} htmlFor={'description'} id={'description'} register={register} error={errors.description?.message} inputTitle={'Description'} />
                <RatingComponent register={register} errors={errors.rating?.message} />
                <InputComponent htmlFor={'imageUrl'} id={'imageUrl'} register={register} error={errors.imageUrl?.message} inputTitle={'Image Url'} />
                <div className='button-container flex flex-row gap-6 mx-auto mt-12'>
                    { children }
                </div>
            </form>
        </FormProvider>
    );
}

export default FormComponent;