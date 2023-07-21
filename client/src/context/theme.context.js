
const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    return (
        <ThemeContext.Provider value={{}}>
            {props.children}

        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }