import * as React from 'react'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'

const Navbar = () => {
    return (
        <nav className="hidden md:flex fixed top-4 right-4 z-50 bg-pink-500 rounded-xl p-2 body-font">
            <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#home"
                            className="text-white font-semibold hover:text-amber-300 hover:bg-purple-800 px-4 py-2 rounded-md transition"
                        >
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#experience"
                            className="text-white font-semibold hover:text-amber-300 hover:bg-purple-800 px-4 py-2 rounded-md transition"
                        >
                            Experiences
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#projects"
                            className="text-white font-semibold hover:text-amber-300 hover:bg-purple-800 px-4 py-2 rounded-md transition"
                        >
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#about"
                            className="text-white font-semibold hover:text-amber-300 hover:bg-purple-800 px-4 py-2 rounded-md transition"
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default Navbar
