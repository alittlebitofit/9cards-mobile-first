
export default function App() {
  return (
	<main className="min-h-screen flex items-center justify-center bg-pink-50">
		<section className='grid gap-8 grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 m-4 place-content-center md:max-w-3xl lg:max-w-6xl'>
			<Card
				imageSrc="https://plus.unsplash.com/premium_photo-1736981384136-c3ab335cb4f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MyUyRjIlMjBhc3BlY3QlMjByYXRpbyUyMGltYWdlcyUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"
				title="Catosphere"
				description="When you want a companion"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1701486485362-2590bbfc7e00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDMlMkYyJTIwYXNwZWN0JTIwcmF0aW8lMjBpbWFnZXMlMjBwbGFuZXRzfGVufDB8fDB8fHww"
				title="Saturn"
				description="To place rings around all your fingers"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1577083862054-7324cd025fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnRpbmd8ZW58MHwwfDB8fHww"
				title="Painting"
				description="Replica of your imagination"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1544194215-541c2d3561a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Life is beautiful"
				description="You are life"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfDB8MHx8fDA%3D"
				title="Hallu"
				description="I don't usually say hi but you are my favorite"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
				title="Healthy"
				description="You are what you consume"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1506781025934-7db24d1701bc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Network"
				description="Web of life"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Rocket"
				description="Upwards we reach to touch the stars"
			/>

			
			<Card
				imageSrc="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Game of life"
				description="Armored unarmed knights"
			/>
		</section>
	</main>
  );
}


function Card({ imageSrc, title, description }) {
	return (
		<article className='bg-pink-100 p-4 rounded-2xl border-1 border-red-200 shadow-lg hover:scale-102 transform duration-200 transition-transform w-full max-w-[456] sm:max-w-sm mx-auto'>
			<div className="aspect-3/2">
				<img className="w-full h-full object-cover rounded-xl"
					src={imageSrc}
					alt={title}
				/>
			</div>

			<div className="mt-3">
				<h2 className="font-sans text-xl">{title}</h2>
				<p className="text-gray-500 text-sm">{description}</p>
			</div>
		</article>
	);
}

