// 1. Import the extendTheme function
import { ChakraProps, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const baseStyle = definePartsStyle({
  field: {
    _placeholder: { color: 'gray.400' },
  },
  _dark: {
    borderColor: 'gray.50',
    background: 'gray.50',
    _placeholder: { color: 'primary.light' },
    color: 'gray.50',
  },
})

export const inputTheme = defineMultiStyleConfig({ baseStyle })
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  error: {
    main: '#E71D36',
    dark_main: '#B40003',
  },
  success: {
    main: '#32936F',
    dark_main: '#00603C',
  },
  primary: {
    light: '#57D8DC',
    main: '#24A5A9',
    dark: '#0B8C90',
    dark_light: '#007276',
    dark_main: '#00595D',
    dark_dark: '#003F43',
  },
  secondary: {
    light: '#FFA2A8',
    main: '#F9888E',
    dark: '#E06F75',
    dark_light: '#AD3C42',
    dark_main: '#932228',
    dark_dark: '#7A090F',
  },
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
}
const breakpoints = {
  sm: '48em', // 768px
  md: '79em',
  lg: '80em', // 1280px
  xl: '96em', // 1536px
}

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
}

const components = {
  Link: {
    baseStyle: (props: ChakraProps) => ({
      '&:hover': {
        textDecoration: 'none',
        color: mode(colors.black, colors.white)(props),
        textShadow: '0px 0px 0.5px black',
      },
      color: mode('rgb(85, 85, 85)', 'gray.300')(props),
    }),
  },
  Input: inputTheme,
}

const fonts = {
  heading: '"Readex Pro", "Roboto", "Helvetica", "Arial", sans-serif',
  body: '"Readex Pro", "Roboto", "Helvetica", "Arial", sans-serif',
  mono: '"Readex Pro", "Roboto", "Helvetica", "Arial", sans-serif',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors,
  config,
  components,
  fonts,
  breakpoints,
  spacing,
})
export default theme
