import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button} from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  return (
    <Navbar className="bg-gray-950 p-4">
      <NavbarBrand>
        <Image
        src={"/logo.png"} 
        height={50} 
        viewBox="0 0 32 32" 
        width={50}
        className="m-2"
        />
        <p className=" text-slate-400 text-3xl font-bold text-inherit">Pandora</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-in" className="text-slate-400 text-xl">Login</Link>
        </NavbarItem>
        <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat" className="text-slate-400 text-xl">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}