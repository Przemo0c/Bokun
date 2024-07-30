

import * as React from 'react';

//Utils
import { ButtonVariant } from '@/utils/TYPES';

//Components
import ButtonComponent from '@/components/_atoms/Button';
import MessageComponent from '@/components/_molecules/Message';
import Link from 'next/link';

const NotFoundPage = () => {
    return ( 
        <section>
            <MessageComponent message={'Invalid Page'} isError={true}>
                <Link href='/'>
                    <ButtonComponent variant={ButtonVariant.enum.action}>Go to Home page</ButtonComponent>
                </Link>
            </MessageComponent>
        </section>
    );
}
 
export default NotFoundPage;