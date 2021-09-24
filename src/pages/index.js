import Head from "next/head";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import ProductFeed from "../components/ProductFeed.js";


export default function Home({ products }) {
	return (
		<div className='bg-white_smoke'>
			<Head>
				<title>Definitely Not An Amazon Clone</title>
			</Head>
			{/* Header */}
			<Header />

			<main className='max-w-screen-2xl mx-auto'>
				{/* Banner */}
				<Banner />

				{/* Product Feed */}
				<ProductFeed products={products} />
			</main>
		</div>
	);
}

// GET https://fakestoreapi.com/products

export async function getServerSideProps(context) {
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	);

	return {
		props: {
			products
		}
	};
}
