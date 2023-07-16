// Page Router
import { useRouter } from 'next/router'

// Head element
import Head from 'next/head'

// styles
import styles from '../Portfolio.module.scss'

// components
import SectionContainer from '@/components/SectionContainer'
import Contact from '@/components/Contact'
import Image from 'next/image'
import CardsSection from '@/components/CardsSection'
import Button from '@/components/Button'

// temp lists
import { programs, donorPods } from '@/temp/listPlaceholders'

const Program = () => {
	const router = useRouter()
	const { slug } = router.query

	const program = programs.find(
		program => program.title.toLowerCase().replace(/\s+/g, '-') === slug
	)

	return (
		<>
			<Head>
				<title>{program && `Changements | ${program.title}`}</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<main>
				{/* Program Detail */}
				<SectionContainer back={true} marginTop={true}>
					{program && (
						<>
							<div className='titleContainer'>
								<h3 className={styles.programTitle}>{program.title}</h3>
							</div>
							<div className='sectionContainer'>
								<div className={styles.programPhoto}>
									<Image
										src={program.photo}
										fill
										quality={100}
										sizes='(max-width: 768px) 100vw, 768px'
										style={{ objectFit: 'cover' }}
										alt='Section Image'
										priority={true}
										as='img'
									/>
								</div>

								<div className={styles.programContent}>
									<div className={styles.programInfo}>
										<div className={styles.programHighlights}>
											<div>
												<h2 className='dark-orange'>40</h2>
												<p>Total Pledge</p>
											</div>
											<div>
												<h2 className='orange'>40</h2>
												<p>Fullfiled Pledge</p>
											</div>
											<div>
												<h2 className='red'>40</h2>
												<p>Total Pending Pledge</p>
											</div>
										</div>

										<p>
											Thank you for being true change makers in our communities
											that need it most. We can help you reach your full
											potential with committed partners. Thank you for being
											true change makers in our communities that need it most.
											We can help you reach your full potential with committed
											partners. Thank you for being true change makers in our
											communities that need it most. We can help you reach your
											full potential with committed partners. Thank you for
											being true change makers in our communities that need it
											most. We can help you reach your full potential with
											committed partners. Thank you for being true change makers
											in our communities that need it most. We can help you
											reach your full potential with committed partners.
										</p>
									</div>
									{/* Donor Pods Section */}
									<h4>Our ChangeMakers</h4>
									<div className={styles.programPods}>
										{/* Donor Pods Section */}
										{donorPods.map((pod, index) => (
											<div key={index} className={styles.pod}>
												<div className={styles.podImage}>
													<Image
														src={pod.photo}
														fill
														quality={100}
														sizes='(max-width: 768px) 100vw, 768px'
														style={{ objectFit: 'cover' }}
														alt='Pod Photo'
														priority={true}
														as='img'
													/>
												</div>
												<div>
													<p>{pod.subtitle}</p>
													<h5>{pod.title}</h5>
												</div>
												<Button
													url={`/portfolio/donor-pods/${pod.title
														.toLowerCase()
														.replace(/\s+/g, '-')}`}
													color='simple'
												>
													Learn More
												</Button>
											</div>
										))}
									</div>
								</div>
							</div>
						</>
					)}
				</SectionContainer>

				{/* Other Programs Section */}
				{program && (
					<CardsSection
						title='Programs'
						content={programs.filter(item => item !== program)}
						folder='portfolio/programs'
						buttonText='Learn More'
					/>
				)}

				{/* Contact */}
				<Contact />
			</main>
		</>
	)
}

export default Program