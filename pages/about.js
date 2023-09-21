// Import the Carousel component and the CSS file
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Define the images to display in the slider
const images = [
	{
		src: 'static/arsho_labs.jpg',
	},
	{
		src: 'static/lab_work.jpg',
	},
	{
		src: 'static/pro_picture.jpg',
	},
];

// Create a custom component that renders each image in the slider
const ImageSlide = ({ src, alt }) => {
	return (
		<div>
			<img className="photo" src={src} alt={alt} />
		</div>
	);
};

// Create an About component that uses the Carousel component
export default function About() {
	return (
		<div className="about">
			<h1>Who is Peniel?</h1>
			<p>
				Hi, I am Peniel Mesele a junior software developer and Medical
				laboratory technologist.
			</p>
			<p>
				I love creating fast and beautiful websites using Next.js and other
				modern technologies. I also love volountaring and helping people while
				they are sick.
			</p>
			<p>You can find me on Facebook, GitHub, Instagram and LinkedIn.</p>
			<Carousel autoPlay infiniteLoop showArrows>
				{images.map((image, index) => (
					<ImageSlide key={index} src={image.src} alt={image.alt} />
				))}
			</Carousel>
			<Link href="/">Go Back to Home</Link>
		</div>
	);
}
