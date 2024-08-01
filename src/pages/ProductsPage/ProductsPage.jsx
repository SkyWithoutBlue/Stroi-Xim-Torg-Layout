import React, { Suspense, useState } from 'react'
import LoadingPage from '../LoadingPage/LoadingPage'
import './productsPage.scss'

function ProductsPage() {
	const [isButtonClicked, setsButtonClicked] = useState(false)
	const handleToggle = () => setsButtonClicked(prev => !prev)
	return (
		<Suspense fallback={<LoadingPage />}>
			<div className='productsPage__wrapper'>
				<p className='productsPage__wrapper--label'>Каталог товаров</p>
				<ul className='container productsPage__wrapper--menu'>
					<li className='productsPage__wrapper--item'>
						<button
							className='productsPage__wrapper--button'
							onClick={handleToggle}
						>
							Узнать больше
						</button>
					</li>
				</ul>
				{isButtonClicked && (
					<div className='product__overlay'>
						<div className='product__content'>
							<button
								className='close__button'
								onClick={() => setsButtonClicked(prev => !prev)}
							>
								X
							</button>
							<div className='product__content--label'>Арматура</div>
							<div className='product__content--flex'>
								{/* IMAGE */}
								<img className='test_image' src='/armatura.png' alt='' />
								<div className='product__content--description'>
									<h1 className='product__content--text'>Рифленая:</h1>
									<p className='product__content--text-sub'>
										6мм6000 /в бухтахСт.25Г2С; Ст3ПС/СП 8мм6000 /11700/в
										бухтахСт.25Г2С; Ст35ГС; Ст3ПС; Ст3ПС/СП 10мм11700/в
										бухтахСт.25Г2С; Ст3ПС; Ст35ГС 12ммн/д от 6000-11700Ст.25Г2С;
										Ст3ПС 14ммн/д от 6000-11700Ст.25Г2С; Ст3ПС/СП 16ммн/д от
										6000-11700Ст.25Г2С; Ст3ПС 18ммн/д от 6000-11700Ст3ПС
									</p>
									<p className='product__content--text--notification'>
										Стоимость и наличие уточняйте у специалистов{' '}
										<span className='warning-color'>Строй</span>
										<span>Хим</span>
										<span className='warning-color'>Торг</span>
									</p>
									<button className='product__content--button'>
										Заказать сейчас
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</Suspense>
	)
}

export default ProductsPage
