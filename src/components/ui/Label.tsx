type LabelProps = {
    htmlFor: string
    name: string
    isError: boolean
    required: boolean
}

export default function Label({ htmlFor, name, isError, required }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`w-full text-sm font-medium leading-6 ${isError ? "text-red-600" : "text-gray-900"}`}>
            {name} {required && <span className="text-red-600">*</span>}
        </label>
    )
}