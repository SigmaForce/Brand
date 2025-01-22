import { Palette } from "@phosphor-icons/react";
import ReactCountryFlag from "react-country-flag";
import "./App.css";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>
      <Header.Root className="py-5">
        <Logo />
        <div className="flex justify-between items-center gap-16">
          <Header.Nav>
            <Header.NavItem href="/" isActive>
              Home
            </Header.NavItem>
            <Header.NavItem href="/about">About</Header.NavItem>
            <Header.NavItem href="/projects">Projects</Header.NavItem>
            <Header.NavItem href="/contact">Contact</Header.NavItem>
            <Header.NavItem href="/blog">Blog</Header.NavItem>
          </Header.Nav>
          <div className="flex">
            <div className="size-10 rounded-full bg-brand-dark-active flex items-center justify-center hover:cursor-pointer">
              <Palette size={24} color="#E8FF1A" />
            </div>
            '
            <div className="size-10 rounded-full bg-brand-dark-active flex items-center justify-center hover:cursor-pointer">
              <ReactCountryFlag countryCode="BR" svg />
            </div>
            '
          </div>
        </div>
      </Header.Root>
    </>
  );
}

export default App;
