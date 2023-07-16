// Page Router
import { useRouter } from 'next/router'

// Head element
import Head from 'next/head'

// styles
import styles from './Blog.module.scss'

// components
import SectionContainer from '@/components/SectionContainer'
import Contact from '@/components/Contact'
import Image from 'next/image'
import CardsSection from '@/components/CardsSection'

// temp lists
import { articles } from '@/temp/listPlaceholders'

const Article = () => {
	const router = useRouter()
	const { slug } = router.query

	const article = articles.find(
		article => article.title.toLowerCase().replace(/\s+/g, '-') === slug
	)

	return (
		<>
			<Head>
				<title>{article && `Changements | ${article.title}`}</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<main>
				{/* Article content */}
				<SectionContainer back={true} marginTop={true}>
					{article && (
						<div className='sectionContainer'>
							<div className={styles.blogPhoto}>
								<Image
									src={article.photo}
									fill
									quality={100}
									sizes='(max-width: 768px) 100vw, 768px'
									style={{ objectFit: 'cover' }}
									alt='Section Image'
									priority={true}
									as='img'
								/>
							</div>
							<div className={styles.blogText}>
								<p className={styles.date}>{article.subtitle}</p>
								<h3>{article.title}</h3>
								<p>{article.text}</p>
							</div>
						</div>
					)}
				</SectionContainer>

				{/* Other articles Section */}
				{article && (
					<CardsSection
						title='Recent Posts'
						content={articles.filter(item => item !== article).slice(0, 4)}
						folder='blog'
						buttonText='Read More'
					/>
				)}

				{/* Contact */}
				<Contact />
			</main>
		</>
	)
}

export default Article