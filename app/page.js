// import store from "./tienda/page"
import Header from "./components/header.js";
import Cover from "./components/cover.js";
import Services from "./components/services.js";
import Footer from "./components/footer.js";


export default function Page({  children }) {
  return (
   
    <section className="">
      <Header/>
        <Cover/>
        <Services/>
        <Footer/> 
      {children}
    </section>
  
  )
}
