//import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Filters from "./components/Filters";
import Products from "./components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>

      <Footer />
    </div>
  );
}

export default App;
