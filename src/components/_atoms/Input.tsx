import * as React from 'react';

//Utils
import { EnumInputVariant, InputVariant } from '@/utils/TYPES';

//ETC.
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  htmlFor: string;
  id: string;
  variant?: EnumInputVariant;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  error?: string;
  inputTitle: string;
}

const InputComponent = ({ htmlFor, id, type = 'text', register, error, inputTitle, variant = InputVariant.enum.input } : InputProps) => {
  let inputContent = null;
  let inputClassName = 'bg-stone-50/10 focus:outline-none focus:ring focus:ring-primary rounded-md p-3 text-base text-white';

    switch (variant) {
        case InputVariant.enum.textarea:
        inputContent = (
            <textarea
            rows={6}
            id={id}
            {...register(id, { required: `${inputTitle} is required.` })}
            className={inputClassName}
            />
        );
        break;
        case InputVariant.enum.input:
        default:
        inputContent = (
            <input
            type={type}
            id={id}
            {...register(id, { required: `${inputTitle} is required.` })}
            className={inputClassName}
            />
        );
        break;
    }

    return (
        <div className='input-control'>
            <label htmlFor={htmlFor}>{inputTitle}</label>
            {inputContent}
            {error && <p className='error'>{error}</p>}
        </div>
    );
}

export default InputComponent;