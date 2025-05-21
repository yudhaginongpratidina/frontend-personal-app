"use client"

import { useState } from "react"

import { Form, FormItem, FormLinkAlternative, FormMessage } from "@/components/ui/Form"
import Label from "@/components/ui/Label"
import TextField from "@/components/ui/TextField"
import Button from "@/components/ui/Button"

type FormData = {
    email: string
    password: string
    isLoading: boolean
    isError: boolean
    message: string
}

export default function Page() {

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
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

            (formData.email === "user@gmail.com" && formData.password === "password")
                ? setFormData({ ...formData, isLoading: false, isError: false, message: "Login successful" })
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
                <Button
                    type={"submit"}
                    name={"Login"}
                    disabled={formData.isLoading}
                    isLoading={formData.isLoading}
                    fullWidth={true}
                    className="border-gray-200 bg-black text-white"
                />
            </FormItem>
            <FormItem>
                <FormLinkAlternative
                    textAlternative={"Don't have an account?"}
                    linkAlternative={"Register"}
                    href={"/register"}
                />
            </FormItem>
        </Form>
    )
} 