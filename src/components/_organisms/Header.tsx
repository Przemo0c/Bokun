import * as React from 'react';

//Components
import NavigationComponent from './Nav';

const HeaderComponent = () => {
    return (
        <header className='bg-secondary p-8'>
            <NavigationComponent/>
        </header>
    );
}
 
export default HeaderComponent;