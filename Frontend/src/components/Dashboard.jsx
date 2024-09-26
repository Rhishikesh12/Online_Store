import { useState } from "react";
import {
	HomeIcon,
	UserGroupIcon,
	FolderIcon,
	CalendarIcon,
} from "@heroicons/react/24/outline";

const categories = [
	{ name: "All Products", icon: HomeIcon },
	{ name: "Mobile Phone", icon: UserGroupIcon },
	{ name: "Laptop", icon: FolderIcon },
	{ name: "Camera", icon: CalendarIcon },
];

const Dashboard = () => {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Product 1",
			imageUrl: "https://via.placeholder.com/150",
			count: 0,
		},
		{
			id: 2,
			name: "Product 2",
			imageUrl: "https://via.placeholder.com/150",
			count: 0,
		},
		{
			id: 3,
			name: "Product 3",
			imageUrl: "https://via.placeholder.com/150",
			count: 0,
		},
		{
			id: 4,
			name: "Product 4",
			imageUrl: "https://via.placeholder.com/150",
			count: 0,
		},
		{
			id: 5,
			name: "Product 5",
			imageUrl: "https://via.placeholder.com/150",
			count: 0,
		},
	]);
	const [selectedCategory, setSelectedCategory] = useState("All Products");

	// Handler to increment product count
	const incrementCount = (id) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id ? { ...product, count: product.count + 1 } : product
			)
		);
	};

	// Handler to decrement product count
	const decrementCount = (id) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id && product.count > 0
					? { ...product, count: product.count - 1 }
					: product
			)
		);
	};
	return (
		<>
			<div className='flex h-screen'>
				<div className='bg-gray-800 text-white w-64'>
					<div className='p-4'>
						<h2 className='text-2xl font-semibold mb-6'>Categories</h2>
						<ul>
							{categories.map((category) => (
								<li key={category.name}>
									<button
										className={`flex items-center p-3 w-full text-left rounded-lg transition-colors ${
											selectedCategory === category.name
												? "bg-gray-700"
												: "hover:bg-gray-700"
										}`}
										onClick={() => setSelectedCategory(category.name)}>
										<category.icon className='h-6 w-6 mr-3' />
										{category.name}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Main Content */}
				<div className='flex-grow p-6 bg-gray-100'>
					{selectedCategory === "All Products" && (
						<>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								{products.map((product) => (
									<div
										key={product.id}
										className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
										<img
											src={product.imageUrl}
											alt={product.name}
											className='h-40 w-40 object-cover rounded-lg'
										/>
										<h2 className='text-xl font-bold mt-4'>{product.name}</h2>

										<div className='flex items-center justify-between mt-4 space-x-4'>
											<button
												className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
												onClick={() => decrementCount(product.id)}>
												-
											</button>
											<span className='text-lg'>{product.count}</span>
											<button
												className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
												onClick={() => incrementCount(product.id)}>
												+
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					)}

					{selectedCategory === "Mobile Phone" && (
						<>
							<h1 className='text-3xl font-bold'>Team</h1>
							<p className='mt-4'>This is the content of the Team page.</p>
						</>
					)}
					{selectedCategory === "Laptop" && (
						<>
							<h1 className='text-3xl font-bold'>Projects</h1>
							<p className='mt-4'>This is the content of the Projects page.</p>
						</>
					)}
					{selectedCategory === "Camera" && (
						<>
							<h1 className='text-3xl font-bold'>Calendar</h1>
							<p className='mt-4'>This is the content of the Calendar page.</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
