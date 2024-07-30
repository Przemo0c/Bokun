import * as React from 'react';

//Components
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../assets/images/logo.png';
import NavLinkComponent from '../_atoms/NavLink';

const NavigationComponent = () => {

    return ( 
        <nav>
            <ul className='flex flex-row gap-12 items-center justify-center'>
                <li>
                    <NavLinkComponent href='/'>Home</NavLinkComponent>
                </li>
                <li>
                <Link href={'/'}>
                    <Image src={LogoImage} alt={'Bókun Logo'} className='max-h-[76px] object-contain'/>
                </Link>
                </li>
                <li>
                    <NavLinkComponent href='/experiences'>Experiences</NavLinkComponent>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavigationComponent;