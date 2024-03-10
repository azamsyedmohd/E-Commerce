import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import { Provider } from "react-redux";
import { store } from "./utils/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <section>
          <Header />
          <AllRoutes />
          <Footer />
        </section>
      </Provider>
    </>
  );
}

export default App;
