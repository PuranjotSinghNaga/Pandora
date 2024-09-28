import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">Pandora</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
          Project Desc
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Meet the Team
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-in">Login</Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/sign-up">Sign Up</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}