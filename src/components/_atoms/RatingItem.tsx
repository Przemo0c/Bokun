import * as React from 'react';

type RatingItemProps = {
    rating: number,
    onClick: (arg0: number) => void,
    active: boolean,
}

const RatingItem = ( { rating, onClick, active } : RatingItemProps ) => {
    if(!rating) return;

    let ratingItemClass = 'w-[40px] h-[40px] rounded-md border border-gray-100 flex items-center justify-center transition-all'
    if(active){
        ratingItemClass = ratingItemClass.concat(' ', 'bg-green-1 text-primary border-primary')
    } else {
        ratingItemClass = ratingItemClass.concat(' ', '')
    }

    return ( 
        <button type="button" className={ratingItemClass} onClick={() => onClick(rating)}>
            <span className='text-base'>
            { rating.toString() }</span>
        </button>
    );
}
 
export default RatingItem;