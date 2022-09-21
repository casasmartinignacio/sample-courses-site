import { ThemeProvider } from 'styled-components';

const themeValues = {
  colors: {
    black: '#000',
    white: '#fff',
  },
  brandColors: {
    yellow: '#FEC109',
  },
  colorGroups: {
    default: {
      color: '#000',
      bgColor: '#fff',
      borderColor: '#cce5ff',
    },
    info: {
      color: '#004085',
      bgColor: '#cce5ff',
      borderColor: '#cce5ff',
    },
    error: {
      color: '#721c24',
      bgColor: '#f8d7da',
      borderColor: '#f5c6cb',
    },
    warning: {
      color: '#856404',
      bgColor: '#fff3cd',
      borderColor: '#ffeeba',
    },
    success: {
      color: '#155724',
      bgColor: '#d4edda',
      borderColor: '#c3e6cb',
    },
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={themeValues}>
    { children }
  </ThemeProvider>
)

export default Theme;

