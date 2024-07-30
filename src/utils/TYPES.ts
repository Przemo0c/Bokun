import { z } from 'zod';

//Form Types
export const ExperienceSchema = z.object({
    title: z.string().nonempty({ message: 'Title is required.' }),
    description: z.string().nonempty({ message: 'Description is required.' }),
    rating: z.number({
        required_error: 'Rating is required.',
        invalid_type_error: 'Rating should be in a range of 1-10',
    }).min(1, { message: 'Rating should be at least 1' }).max(10, { message: 'Rating should be at most 10' }),
    imageUrl: z.string().url({ message: 'Invalid URL' }),
});

export type ExperienceTypeForm = z.infer<typeof ExperienceSchema>;

//UI Types
//_ATOMS
    //Button
    export const ButtonVariant = z.enum(['primary', 'secondary', 'action']);
    export type EnumButtonVariant = z.infer<typeof ButtonVariant>;
    export const ButtonType = z.enum(['button', 'submit', 'reset']);
    export type EnumButtonType = z.infer<typeof ButtonType>;
    //Input
    export const InputVariant = z.enum(['input', 'textarea']);
    export type EnumInputVariant = z.infer<typeof InputVariant>;

//API Responses
export const ExperienceType = z.object({
    id: z.string(),
    title: z.string(),
    rating: z.number(),
    description: z.string(),
    imageUrl: z.string()
});

export type ExperienceType = z.infer<typeof ExperienceType>;

export const ExperienceListResponse = z.array(ExperienceType);
export type ExperienceListResponse = z.infer<typeof ExperienceListResponse>;