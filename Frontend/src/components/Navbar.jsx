import { useState } from "react";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Dashboard from "./Dashboard";
import Products from "./Products";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigationItems = [
	{ name: "Dashboard", component: <Dashboard /> },
	{ name: "Checkout", component: <Products /> },
];

const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [currentNav, setCurrentNav] = useState(navigationItems[0].name);

	const renderContent = () => {
		const currentPage = navigationItems.find(
			(item) => item.name === currentNav
		);
		return currentPage ? currentPage.component : <Dashboard />;
	};

	return (
		<>
			<div className='min-h-full'>
				<Disclosure as='nav' className='bg-gray-800'>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex h-16 items-center justify-between'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										alt='Your Company'
										src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
										className='h-8 w-8'
									/>
								</div>
								<div className='hidden md:block'>
									<div className='ml-10 flex items-baseline space-x-4'>
										{navigationItems.map((item) => (
											<button
												key={item.name}
												onClick={() => setCurrentNav(item.name)}
												className={classNames(
													currentNav === item.name
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}>
												{item.name}
											</button>
										))}
									</div>
								</div>
							</div>
							<div className='hidden md:block'>
								<div className='ml-4 flex items-center md:ml-6'>
									{/* <button
										type='button'
										className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
										<span className='absolute -inset-1.5' />
										<span className='sr-only'>View notifications</span>
										<ShoppingCartIcon aria-hidden='true' className='h-6 w-6' />
									</button> */}

									{/* Profile dropdown */}
									<Menu as='div' className='relative ml-3'>
										<div>
											<MenuButton className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
												<span className='absolute -inset-1.5' />
												<span className='sr-only'>Open user menu</span>
												<img
													alt=''
													src={user.imageUrl}
													className='h-8 w-8 rounded-full'
												/>
											</MenuButton>
										</div>
										<MenuItems
											transition
											className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none'>
											{userNavigation.map((item) => (
												<MenuItem key={item.name}>
													<a
														href={item.href}
														className='block px-4 py-2 text-sm text-gray-700'>
														{item.name}
													</a>
												</MenuItem>
											))}
										</MenuItems>
									</Menu>
								</div>
							</div>
							<div className='-mr-2 flex md:hidden'>
								{/* Mobile menu button */}
								<DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									<Bars3Icon
										aria-hidden='true'
										className='block h-6 w-6 group-data-[open]:hidden'
									/>
									<XMarkIcon
										aria-hidden='true'
										className='hidden h-6 w-6 group-data-[open]:block'
									/>
								</DisclosureButton>
							</div>
						</div>
					</div>

					<DisclosurePanel className='md:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
							{navigationItems.map((item) => (
								<DisclosureButton
									key={item.name}
									as='a'
									onClick={() => setCurrentNav(item.name)}
									className={classNames(
										currentNav === item.name
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}>
									{item.name}
								</DisclosureButton>
							))}
						</div>
						<div className='border-t border-gray-700 pb-3 pt-4'>
							<div className='flex items-center px-5'>
								<div className='flex-shrink-0'>
									<img
										alt=''
										src={user.imageUrl}
										className='h-10 w-10 rounded-full'
									/>
								</div>
								<div className='ml-3'>
									<div className='text-base font-medium leading-none text-white'>
										{user.name}
									</div>
									<div className='text-sm font-medium leading-none text-gray-400'>
										{user.email}
									</div>
								</div>
							</div>
						</div>
					</DisclosurePanel>
				</Disclosure>

				<header className='bg-white shadow'>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
							{currentNav}
						</h1>
					</div>
				</header>
				<main>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						{/* Render content based on the selected navigation */}
						{renderContent()}
					</div>
				</main>
			</div>
		</>
	);
}
