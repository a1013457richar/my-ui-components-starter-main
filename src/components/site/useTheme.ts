import { useEffect, useState } from 'react'

export const useTheme = (storgeKey='vite-ui-theme') => {
  const [isDark, setIsDark] = useState<boolean>(()=>{
    const isDark = localStorage.getItem(storgeKey)
    return isDark ? isDark === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches
  
  })
  //perform the toggleDark function
  useEffect(() => {
const root = window.document.documentElement
root.classList.remove('light', 'dark')
root.classList.add(isDark ? 'dark' : 'light')
localStorage.setItem(storgeKey, isDark.toString())  
  }, [isDark, storgeKey])
  const toggleDark = () => {
    setIsDark(!isDark)
  }
  return {
    isDark,
    toggleDark
  }
}

