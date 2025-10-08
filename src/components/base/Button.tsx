import type { Component, JSX } from 'solid-js';

interface ButtonProps {
    href?: string;
    class?: string;
    children: JSX.Element;
}

const Button: Component<ButtonProps> = (props) => {
    // Базовые стили кнопки
    const baseClasses = "inline-block py-4 px-8 bg-brand-yellow text-zinc-900 font-semibold text-center rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-brand-yellow-dark hover:-translate-y-0.5";

    // Объединяем базовые классы с теми, что переданы через props
    const combinedClasses = () => `${baseClasses} ${props.class || ''}`;

    return (
        <a href={props.href || '#'} class={combinedClasses()}>
            {props.children}
        </a>
    );
};

export default Button;