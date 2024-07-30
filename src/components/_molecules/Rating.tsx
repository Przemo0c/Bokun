import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import RatingItem from '../_atoms/RatingItem';

type RatingComponentProps = {
  register: any;
  errors: any;
}

const RatingComponent = ({ register, errors }: RatingComponentProps) => {
    const { setValue, watch } = useFormContext();
    const rating = watch('rating', 0); // Watch for rating value
    const ref = useRef<HTMLInputElement>(null);
    const maxScore = 10;
    const ratingArray = Array.from({ length: maxScore });

    const handleRatingClicked = (rating: number) => {
        if (ref.current) {
        ref.current.value = rating.toString();
        }
        setValue('rating', rating, { shouldDirty: true }); // Update rating value
    };

    useEffect(() => {
        if (ref.current) {
        ref.current.value = rating.toString(); // Set initial value
        }
    }, [rating]);

    return (
        <div className='input-control'>
        <label htmlFor='rating'>Rating</label>
        <input
            type='hidden'
            id='rating'
            ref={ref}
            {...register('rating', {
            valueAsNumber: true,
            required: {
                value: true,
                message: 'Rating is required.',
            },
            })}
        />
        <ul className='flex gap-3 justify-center'>
            {ratingArray.map((_, index) => (
            <RatingItem
                key={index}
                rating={index + 1}
                onClick={() => handleRatingClicked(index + 1)}
                active={rating === index + 1}
            />
            ))}
        </ul>
        <p className='error'>{errors}</p>
        </div>
    );
    };
export default RatingComponent;