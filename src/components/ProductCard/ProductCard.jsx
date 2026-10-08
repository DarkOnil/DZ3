import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../store/favoritesSlice'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()

    const favorites = useSelector(state => state.favorites.items)

    const isFavorite = favorites.some(
        item => item.id === product.id
    )

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price} сом</p>

            <button onClick={() => dispatch(toggleFavorite(product))}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    )
}

export default ProductCard
