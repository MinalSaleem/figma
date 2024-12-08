import Header from "../components/Header";
import Sidebar from "../components/Blogsidebar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
     <Header title="Blog List" route="Blog" />
      
      <div className="container mx-auto flex mt-6">
        <main className="w-3/4 p-4">
          <Card
            image="/blog/blog1.png"
            title="Delicious Spaghetti"
            description="A classic Italian pasta dish with rich tomato sauce."
            
          />
          <Card
            image="/blog/blog2.png"
            title="Cheesy Pizza"
            description="A freshly baked pizza with extra cheese toppings."
          
          />
          <Card
            image="/blog/blog3.png"
            title="Hot & Sour Soup"
            description="A tangy soup perfect for the winter season."
            
          />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
