import clsx from "clsx"
import Link from "next/link"
import React from "react"

export const Form = ({ onSubmit, children, className }: Readonly<{ onSubmit: (event: React.FormEvent<HTMLFormElement>) => void, children: React.ReactNode, className?: string }>) => {
    return (
        <form onSubmit={onSubmit} className={`w-full p-4 flex flex-col gap-4 rounded-sm shadow border-gray-200 bg-white ${className ? className : "max-w-md"}`}>
            {children}
        </form>
    )
}


export const FormItem = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full flex flex-col gap-1">
            {children}
        </div>
    )
}

export const FormSplit = ({ children }: { children: React.ReactNode }) => {
    const childCount = React.Children.count(children);

    let gridTemplate;
    switch (childCount) {
        case 2:
            gridTemplate = 'grid-cols-1 sm:grid-cols-2';
            break;
        case 3:
            gridTemplate = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            break;
        case 4:
            gridTemplate = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
            break;
        default:
            gridTemplate = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }

    return (
        <div className={clsx('w-full grid gap-4', gridTemplate)}>
            {children}
        </div>
    );
};

export const FormMessage = ({ isError, message }: Readonly<{ isError: boolean, message: string }>) => {
    return (
        <div className={`w-full p-2.5 rounded-sm text-sm font-medium leading-6 ${isError ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
            {message}
        </div>
    )
}

export const FormLinkAlternative = ({ textAlternative, linkAlternative, href }: Readonly<{ textAlternative: string, linkAlternative: string, href: string }>) => {
    return (
        <Link href={href || "/"} className="w-full flex justify-center gap-1 text-sm">
            <span className="font-semibold text-gray-600">
                {textAlternative}
            </span>
            <span className="font-semibold text-blue-600 hover:cursor-pointer">{linkAlternative}</span>
        </Link>
    )
}