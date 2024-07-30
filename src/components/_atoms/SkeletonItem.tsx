import * as React from 'react';

type SkeletonItemComponentProps = {
    className: string
}

const SkeletonItemComponent = ( { className } : SkeletonItemComponentProps) => {
    return ( 
        <div className={`bg-gray-500 animate-pulse ${className}`}></div>
    );
}
 
export default SkeletonItemComponent;