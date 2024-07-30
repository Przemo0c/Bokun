import { ExperienceListResponse, ExperienceType } from '../utils/TYPES';
import { ErrorLabelsEnum } from '../utils/config';

const getURL = ({ path } : any) => {
    const ASSIGNMENT_ID = 'kikoq7dxgtft27386g98npyd';
    const BASE_URL = `https://demo.bokun.me/${ASSIGNMENT_ID}/`;

    return BASE_URL + path;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const ENABLE_DELAY = true;
const ENABLE_ERRORS = false;

export const getExperienceList = async (): Promise<ExperienceListResponse> => {
    const url = getURL({ path: 'experiences' });
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if(ENABLE_DELAY) await delay(500);
    if(ENABLE_ERRORS) throw new Error('Dummy error text');

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errorMessage || ErrorLabelsEnum.GET_EXPERIENCE_LIST);
        }

        const data: ExperienceListResponse = await response.json();
        return data;
    } catch (error) {
        console.error(ErrorLabelsEnum.GET_EXPERIENCE_LIST_FATAL, error);
        throw error;
    }
};

export const getSingleExperience = async (experienceId: string): Promise<ExperienceType> => {
    const url = getURL({ path: `experiences/${experienceId}` });
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if(ENABLE_DELAY) await delay(500);
    if(ENABLE_ERRORS) throw new Error('Dummy error text');

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errorMessage || ErrorLabelsEnum.GET_EXPERIENCE);
        }

        const data: ExperienceType = await response.json();
        return data;
    } catch (error) {
        console.error(`${ErrorLabelsEnum.GET_EXPERIENCE_FATAL} ${experienceId}:`, error);
        throw error;
    }
};


export const postExperience = async (experience: ExperienceType): Promise<ExperienceListResponse> => {
    const url = getURL({ path: 'experiences' });
    const headers: HeadersInit = {
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        title: experience.title,
        rating: experience.rating,
        description: experience.description,
        imageUrl: experience.imageUrl
    });

    if(ENABLE_DELAY) await delay(500);
    if(ENABLE_ERRORS) throw new Error('Dummy error text');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errorMessage || ErrorLabelsEnum.POST_EXPERIENCE);
        }

        const data: ExperienceListResponse = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error(ErrorLabelsEnum.POST_EXPERIENCE_FATAL, error);
        throw error;
    }
};

export const updateExperience = async (experience: ExperienceType): Promise<ExperienceType> => {
    
    const response = await fetch(getURL({ path: `experiences/${experience.id}` }), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: experience.title,
            rating: experience.rating,
            description: experience.description,
            imageUrl: experience.imageUrl
        }),
    });

    if(ENABLE_DELAY) await delay(500);
    if(ENABLE_ERRORS) throw new Error('Dummy error text');

    const data = await response.json();
    if (!response.ok) throw new Error(data.errorMessage);
    return data;
};


export const deleteExperience = async (experienceId: string): Promise<void> => {
    const url = getURL({ path: `experiences/${experienceId}` });

    if(ENABLE_DELAY) await delay(500);
    if(ENABLE_ERRORS) throw new Error('Dummy error text');

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errorMessage || `Failed to delete experience with ID ${experienceId}`);
        }
    } catch (error) {
        console.error(`Error deleting experience with ID ${experienceId}:`, error);
        throw error;
    }
};