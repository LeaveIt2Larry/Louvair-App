import Image from 'next/image'
import formatPrice from '@/utils/PriceFormat'
import { ProductType } from '@/types/ProductType'
import Link from 'next/link'
import { Card, CardFooter } from './ui/card'

export default function Product({ name, image, unit_amount, id, description, metadata }: ProductType) {
	const { features } = metadata

	return (
		<Link
			href={{
				pathname: `/product/${id}`,
				query: { name, image, unit_amount, id, description, features },
			}}
			className='overflow-hidden border rounded-lg shadow-sm'
		>
			<Card className='w-[340px]'>
				<Image
					src={image}
					alt={image + name}
					width={800}
					height={800}
					className='object-cover w-full transition-transform duration-300 h-80 hover:scale-105'
					priority={true}
				/>
				<CardFooter className='font-medium py-2 flex flex-col'>
					<h1>{name}</h1>
					<h2 className='text-sm font-thin'>{unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h2>
				</CardFooter>
			</Card>
		</Link>
	)
}
