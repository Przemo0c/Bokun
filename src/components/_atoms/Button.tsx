import * as React from 'react';

//Utils
import { ButtonVariant, EnumButtonType, EnumButtonVariant } from '@/utils/TYPES';

type ButtonProps = {
    type?: EnumButtonType,
    variant: EnumButtonVariant,
    children?: React.ReactNode,
    onClick?: (arg0: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent = ( { type, variant, children, onClick } : ButtonProps ) => {
    let ButtonClassName = 'inline-flex items-center px-[16px] py-[14px] text-base rounded-[8px] ring-inset ring-0 transition-all antialiased';

    switch (variant){
        case ButtonVariant.enum.primary:
            ButtonClassName = ButtonClassName.concat(' ', 'bg-green-1 border border-primary text-primary hover:bg-white');
        break;
        case ButtonVariant.enum.secondary:
            ButtonClassName = ButtonClassName.concat(' ', 'hover:bg-secondary/50');
        break;
        case ButtonVariant.enum.action:
            ButtonClassName = ButtonClassName.concat(' ', 'shadow-sm bg-[#39b26c] hover:bg-[#2c9358]');
        break;

        default:
        break;
    }

    return (
        <button type={type} className={ButtonClassName} onClick={onClick}>
            { children }
        </button>
    );
}
 
export default ButtonComponent;