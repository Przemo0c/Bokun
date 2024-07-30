'use client'
import * as React from 'react';

//ETC.
import { usePathname } from 'next/navigation';

//Components
import Link from 'next/link';

type NavLinkProps = {
    children: React.ReactNode,
    href: string,
}

const NavLinkComponent = ( {children, href} : NavLinkProps) => {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? 'text-base' : ''}>{children}</Link>       
    );
}
 
export default NavLinkComponent;