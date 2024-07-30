import * as React from 'react';

//Utils
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

type MessageComponentProps = {
    message?: string,
    children: React.ReactNode,
    isError?: boolean,
    containerStyling?: boolean
}

const MessageComponent = ({message, children, containerStyling = true, isError = false}  : MessageComponentProps ) => {
    let content = (
        <div className='flex flex-col'>
            <div className={`${isError ? 'bg-red-500' : 'bg-primary'} w-[300px] h-[50px] container flex items-center justify-center animate-ping`}>
                <p className='text-base'>
                    { isError ? (
                        <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-white inline-block"/>
                    ) : <CheckIcon aria-hidden="true" className="h-5 w-5 text-white inline-block"/> }
                     {message}</p>
            </div>
            <div className='flex flex-row gap-2 mt-6 justify-center items-center'>
                { children }
            </div>
        </div>
    )

    return ( 
        containerStyling ? (
            <div className='mt-[100px] relative'>
                <div className='new-experience-page mx-auto mt-6 bg-secondary/90 lg:max-w-[50%] container p-6'>
                    {content}
                </div>
            </div>
        ) : (
            content
        )

     );
}
 
export default MessageComponent;