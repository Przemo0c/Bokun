import * as React from 'react';

//ETC
import { Hourglass } from 'react-loader-spinner'

//Utils
import COLORS from '@/utils/COLORS';

const LoaderComponent = ({text = 'Loading...'}  : {text?: string} ) => {
    return ( 
        <div className='flex flex-col items-center gap-3'>
            <Hourglass
                visible={true}
                height="40"
                width="40"
                ariaLabel="hourglass-loading"
                wrapperClass="mx-auto"
                colors={[COLORS.primary, '#fff']}
            />
            <p className='text-white text-base'>{text}</p>
        </div>
     );
}
 
export default LoaderComponent;