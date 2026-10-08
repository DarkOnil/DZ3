import { useSelector } from 'react-redux'
import { selectFavoritesCount } from '../../store/favoritesSlice'
import { useThemeStore } from '../../store/themeStore'

const Header = () => {
    const favoritesCount = useSelector(selectFavoritesCount)
    const theme = useThemeStore(state => state.theme)
    const toggleTheme = useThemeStore(state => state.toggleTheme)

    return (
        <header>
            <span>❤️ {favoritesCount}</span>

            <button onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>
    )
}

export default Header
