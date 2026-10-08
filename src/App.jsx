import { useThemeStore } from './store/themeStore'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'

const products = [
    { id: 1, title: 'Ноутбук', price: 50000 },
    { id: 2, title: 'Телефон', price: 30000 },
    { id: 3, title: 'Наушники', price: 5000 }
]

const App = () => {
    const theme = useThemeStore(state => state.theme)

    return (
        <div className={theme}>
            <Header />

            <h1>Магазин</h1>

            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default App
