"use client";

import { registerUser } from "@/actions/register";
// import { prisma } from "@/utils/prisma";
import { Button, Form, Input } from "@heroui/react";
import { log } from "console";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // "use server";

    e.preventDefault();
    console.log("Form submitted:", formData);
    await registerUser(formData);

    // const user = await prisma.user.create({
    //   data: {
    //     email: formData.email,
    //     password: formData.password,
    //   },
    // });

    // console.log("user", user);

    const result = await registerUser(formData);

    console.log(result);

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введіть email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Пошта обов'язкова";
          if (!validateEmail(value)) return "Некоректний email";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Введіть пароль"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Пароль обов'язковий";
          if (value.length < 6) return "Пароль має бути не менш 6 символів";
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Підтвердіть пароль"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Пароль для підтвердження обов'язковий";
          if (value !== formData.password) return "Паролі не співпадають";
          return null;
        }}
      />

      <div className="flex w-[100%]  gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Скасувати
        </Button>
        <Button color="primary" type="submit">
          Зареєструватись
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
