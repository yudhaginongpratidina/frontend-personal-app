"use client"
import { useState } from "react"

import { Form, FormMessage, FormSplit, FormItem } from "@/components/ui/Form"
import Label from "@/components/ui/Label"
import TextField from "@/components/ui/TextField"
import Select from "@/components/ui/Select"
import Button from "@/components/ui/Button"

type FormData = {
    site: string
    intitle: string
    intext: string
    after_date: string
    before_date: string
    filetype: string
    isLoading: boolean
    isError: boolean
    message: string
    query: string
}

export default function Page() {

    const [formData, setFormData] = useState<FormData>({
        site: "",
        intitle: "",
        intext: "",
        after_date: "",
        before_date: "",
        filetype: "",
        isLoading: false,
        isError: false,
        message: "",
        query: ""
    })


    const generateQuery = (e: React.FormEvent) => {
        e.preventDefault()
        setFormData(prev => ({ ...prev, isLoading: true, isError: false, message: "" }))

        if (!formData.site && !formData.intitle && !formData.intext && !formData.after_date && !formData.before_date && !formData.filetype) {
            setFormData(prev => ({ ...prev, isLoading: false, isError: true, message: "Please enter at least one field" }))
            return
        }

        let query = ""

        if (formData.site) query += `site:${formData.site} `
        if (formData.intitle) query += `intitle:${formData.intitle} `
        if (formData.intext) query += `intext:${formData.intext} `
        if (formData.after_date) query += `after:${formData.after_date} `
        if (formData.before_date) query += `before:${formData.before_date} `
        if (formData.filetype) query += `filetype:${formData.filetype} `

        query = query.trim()

        setFormData(prev => ({
            ...prev,
            query,
            isLoading: false,
            isError: false,
            message: `Generated query successfully`
        }))
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <Form onSubmit={generateQuery} className="w-full">
                {formData.message && <FormMessage isError={formData.isError} message={formData.message} />}

                <FormSplit>
                    <FormItem>
                        <Label htmlFor="site" name="Site" isError={formData.isError} required={false} />
                        <TextField type="text" name="site" value={formData.site}
                            onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                            required={false}
                            disabled={formData.isLoading}
                            isLoading={formData.isLoading}
                            isError={formData.isError}
                        />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="intitle" name="Title" isError={formData.isError} required={false} />
                        <TextField type="text" name="intitle" value={formData.intitle}
                            onChange={(e) => setFormData({ ...formData, intitle: e.target.value })}
                            required={false}
                            disabled={formData.isLoading}
                            isLoading={formData.isLoading}
                            isError={formData.isError}
                        />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="intext" name="Text" isError={formData.isError} required={false} />
                        <TextField type="text" name="intext" value={formData.intext}
                            onChange={(e) => setFormData({ ...formData, intext: e.target.value })}
                            required={false}
                            disabled={formData.isLoading}
                            isLoading={formData.isLoading}
                            isError={formData.isError}
                        />
                    </FormItem>
                </FormSplit>

                <FormSplit>
                    <FormItem>
                        <Label htmlFor="after_date" name="After Date" isError={formData.isError} required={false} />
                        <TextField type="date" name="after_date" value={formData.after_date}
                            onChange={(e) => setFormData({ ...formData, after_date: e.target.value })}
                            required={false}
                            disabled={formData.isLoading}
                            isLoading={formData.isLoading}
                            isError={formData.isError}
                        />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="before_date" name="Before Date" isError={formData.isError} required={false} />
                        <TextField type="date" name="before_date" value={formData.before_date}
                            onChange={(e) => setFormData({ ...formData, before_date: e.target.value })}
                            required={false}
                            disabled={formData.isLoading}
                            isLoading={formData.isLoading}
                            isError={formData.isError}
                        />
                    </FormItem>
                </FormSplit>

                <FormItem>
                    <Label htmlFor="filetype" name="File Type" isError={formData.isError} required={false} />
                    <Select
                        name="filetype"
                        value={formData.filetype}
                        onChange={(e) => setFormData({ ...formData, filetype: e.target.value })}
                        required={false}
                        disabled={formData.isLoading}
                        isLoading={formData.isLoading}
                        isError={formData.isError}
                        options={[
                            { value: "pdf", label: "PDF" },
                            { value: "doc", label: "DOC" },
                            { value: "docx", label: "DOCX" },
                            { value: "xls", label: "XLS" },
                            { value: "xlsx", label: "XLSX" },
                            { value: "csv", label: "CSV" },
                            { value: "ppt", label: "PPT" },
                            { value: "pptx", label: "PPTX" },
                            { value: "jpg", label: "JPG" },
                            { value: "jpeg", label: "JPEG" },
                            { value: "png", label: "PNG" },
                            { value: "gif", label: "GIF" },
                        ]}
                    />
                </FormItem>


                <FormItem>
                    <Button
                        type="submit"
                        name="Generate"
                        disabled={formData.isLoading}
                        isLoading={formData.isLoading}
                        fullWidth={true}
                        className="border-gray-200 bg-black hover:bg-gray-800 text-white"
                    />
                </FormItem>
            </Form>

            {formData.query && (
                <div className="w-full p-2.5 rounded-sm text-sm font-medium leading-6 bg-gray-100">
                    {formData.query}
                </div>
            )}
        </div>
    )
}