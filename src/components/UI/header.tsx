"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  return (
    <Image
    src="/logo_tatar_kitchen.png"
    alt="Т кухня"
    width={26}
    height={26}
    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    // placeholder="blur"
    priority
    />
    // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="currentColor"
    //     fillRule="evenodd"
    //   />
    // </svg>
  );
};

export default function Header() {
    const pathname = usePathname();
    const navItems = [
        {href: "/", label: "Рецепти"},
        {href: "/ingridients", label: "Інгредієнти"},
        {href: "/about", label: "Про нас"}
    ];

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1"><Logo />
        <p className="font-bold text-inherit">Т кухня</p></Link>
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item)=> {
            const isActive = pathname === item.href
            return (
            <NavbarItem key={item.href}>
          <Link color="foreground" href={item.href}
          className={`px-3 py-1 
            ${isActive ? "text-blue-500" : "text-foreground"}
            hover:text-blue-300 hover:brotliDecompress
            hover:border-blue-300 hover:rounded-md
            transition-colors
            transition-border
            duration-200
            `}
          >
            {item.label}
          </Link>
        </NavbarItem>);
                    })}
        


        {/* <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
