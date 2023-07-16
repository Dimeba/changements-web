// Head element
import Head from 'next/head'

// components
import PagesHero from '@/components/PagesHero'
import SectionTitle from '@/components/SectionTitle'
import ImageTextColumns from '@/components/ImageTextColumns'
import CardsSection from '@/components/CardsSection'

// sections
import Contact from '@/components/Contact'

// temp lists
import { nonProfits, programs } from '@/temp/listPlaceholders'

const portfolio = () => {
	return (
		<>
			<Head>
				<title>Changements | Our Portfolio</title>
				<meta
					name='description'
					content='JThe NGOs listed here are fully operational, approved with a TaxID. Come together as a group to compound change. You might find more than one cause that interest you and your family and friends. You can belong to more than one group or Pod. Be sure to check the progress, get involved, visit and post your experiences on our blog/vlog. Enjoy the change you are making. '
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<main>
				{/* Hero */}
				<PagesHero imageUrl='/portfolio-hero.jpg'>
					<h1>Our Portfolio</h1>
					<p>
						Where Change is Compounded.
						<br />
						Browse the NGOs we have curated for you.
					</p>
				</PagesHero>

				{/* About Portfolio */}
				<ImageTextColumns direction='row' photoUrl='/indian-girl.jpg'>
					<SectionTitle color='black'>
						NonProfits
						<br /> & <span className='red'>Programs</span>
					</SectionTitle>
					<p>
						The NGOs listed here are fully operational, approved with a TaxID.
					</p>
					<br />
					<p>Come together as a group to compound change.</p>
					<br />
					<p>
						You might find more than one cause that interest you and your family
						and friends. You can belong to more than one group or Pod.
					</p>
					<br />
					<p>
						Be sure to check the progress, get involved, visit and post your
						experiences on our blog/vlog. Enjoy the change you are making.
					</p>
				</ImageTextColumns>

				{/* NonProfits Section */}
				<CardsSection
					title='NonProfits'
					content={nonProfits}
					folder='portfolio'
					buttonText='Learn More'
				/>

				{/* Programs Section */}
				<CardsSection
					title='Programs'
					content={programs}
					folder='portfolio/programs'
					buttonText='Learn More'
				/>

				{/* Contact */}
				<Contact />
			</main>
		</>
	)
}

export default portfolio