"use client"

import { useState } from "react"

import { Form, FormItem, FormMessage, FormLinkAlternative } from "@/components/ui/Form"
import Label from "@/components/ui/Label"
import TextField from "@/components/ui/TextField"
import Button from "@/components/ui/Button"

type FormData = {
    full_name: string,
    email: string
    password: string
    confirm_password: string
    isLoading: boolean
    isError: boolean
    message: string
}

export default function Page() {

    const [formData, setFormData] = useState<FormData>({
        full_name: "",
        email: "",
        password: "",
        confirm_password: "",
        isLoading: false,
        isError: false,
        message: ""
    });

    const clearMessage = () => {
        setTimeout(() => {
            setFormData({ ...formData, isLoading: false, isError: false, message: "" });
        }, 3000);
    }

    const onSubmit = (e: React.FormEvent) => {
        try {
            e.preventDefault();
            setFormData({ ...formData, isLoading: true, isError: false, message: "" });
            
            (formData.full_name === "John Doe" && formData.email === "user@gmail.com" && formData.password === "password")
                ? setFormData({ ...formData, isLoading: false, isError: false, message: "Register successful" })
                : setFormData({ ...formData, isLoading: false, isError: true, message: "Invalid email or password" });

            clearMessage();
        } catch (error) {
            setFormData({ ...formData, isLoading: false, isError: true, message: "Something went wrong" });
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            {formData.message && (
                <FormMessage
                    isError={formData.isError}
                    message={formData.message}
                />
            )}
            <FormItem>
                <Label
                    htmlFor={"full_name"}
                    name={"Full Name"}
                    required={true}
                    isError={formData.isError}
                />
                <TextField
                    type={"text"}
                    name={"full_name"}
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    required={true}
                    disabled={false}
                    isLoading={formData.isLoading}
                    isError={formData.isError}
                />
            </FormItem>
            <FormItem>
                <Label
                    htmlFor={"email"}
                    name={"Email"}
                    required={true}
                    isError={formData.isError}
                />
                <TextField
                    type={"email"}
                    name={"email"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required={true}
                    disabled={false}
                    isLoading={formData.isLoading}
                    isError={formData.isError}
                />
            </FormItem>
            <FormItem>
                <Label
                    htmlFor={"password"}
                    name={"Password"}
                    required={true}
                    isError={formData.isError}
                />
                <TextField
                    type={"password"}
                    name={"password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required={true}
                    disabled={false}
                    isLoading={formData.isLoading}
                    isError={formData.isError}
                />
            </FormItem>
            <FormItem>
                <Label
                    htmlFor={"confirm_password"}
                    name={"Confirm Password"}
                    required={true}
                    isError={formData.isError}
                />
                <TextField
                    type={"password"}
                    name={"confirm_password"}
                    value={formData.confirm_password}
                    onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                    required={true}
                    disabled={false}
                    isLoading={formData.isLoading}
                    isError={formData.isError}
                />
            </FormItem>
            <FormItem>
                <Button
                    type={"submit"}
                    name={"Register"}
                    disabled={formData.isLoading}
                    isLoading={formData.isLoading}
                    fullWidth={true}
                    className="border-gray-200 bg-black text-white"
                />
            </FormItem>
            <FormItem>
                <FormLinkAlternative
                    textAlternative={"Already have an account?"}
                    linkAlternative={"Login"}
                    href={"/login"}
                />
            </FormItem>
        </Form>
    )
} 