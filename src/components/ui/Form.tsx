import Link from "next/link"

export const Form = ({ onSubmit, children }: Readonly<{ onSubmit: (event: React.FormEvent<HTMLFormElement>) => void, children: React.ReactNode }>) => {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-md p-4 flex flex-col gap-4 rounded-sm shadow border-gray-200 bg-white">
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

export const FormMessage = ({ isError, message }: Readonly<{ isError: boolean, message: string }>) => {
    return (
        <div className={`w-full p-2.5 rounded-sm text-sm font-medium leading-6 ${isError ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
            {message}
        </div>
    )
}

export const FormLinkAlternative = ({textAlternative, linkAlternative, href}: Readonly<{textAlternative: string, linkAlternative: string, href: string}>) => {
    return (
        <Link href={href || "/"} className="w-full flex justify-center gap-1 text-sm">
            <span className="font-semibold text-gray-600">
                {textAlternative}
            </span>
            <span className="font-semibold text-blue-600 hover:cursor-pointer">{linkAlternative}</span>
        </Link>
    )
}