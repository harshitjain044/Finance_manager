import AppRoutes from "./routes";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="spendly-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
