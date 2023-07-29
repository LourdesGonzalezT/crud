import { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/theme.context'

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: theme === 'dark' ? 'white' : '#202528',
        color: theme === 'dark' ? 'black' : '#202528'
    }
    return (
        <footer style={themeStyle}>Creado por Lourdes González</footer>
    )
}

export default Footer 