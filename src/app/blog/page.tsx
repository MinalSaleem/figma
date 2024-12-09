import Header from "../components/Header";
import Card from "../components/Card";
import Image from "next/image";

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "/blog/post1.png",
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit amet, sed do.",
    },
    {
      id: 2,
      image: "/blog/post2.png",
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit amet, sed do.",
    },
    {
      id: 3,
      image: "/blog/post3.png",
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit amet, sed do.",
    },
    {
      id: 4,
      image: "/blog/post4.png",
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit amet, sed do.",
    },
  ];
  return (
    <div>
     <Header title="Blog List" route="Blog" />
      
      <div className="container mx-auto flex flex-col lg:flex-row mt-6">
        <div className="lg:w-3/4 p-4">
          <Card
            image="/blog/blog1.png"
            title="10 Reasons To Do A Digital Detox Challenge"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            
          />
          <Card
            image="/blog/blog2.png"
            title="Traditional Soft Pretzels with Sweet Beer Cheese"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
          
          />
          <Card
            image="/blog/blog3.png"
            title="The Ultimate Hangover Burger: Egg in a Hole Burger"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            
          />

          <Card
            image="/blog/blog4.png"
            title="The Ultimate Hangover Burger: Egg in a Hole Burger"
            description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            
          />
        </div>
        

        <div className="lg:w-[350px] w-full lg:mx-0 mx-">
          <div className="bg-white border border-gray-300 p-6 text-center">
            <Image
              src="/blog/chef.png"
              alt="Profile"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Prince Miyako</h2>
            <p className="text-gray-500">Blogger/Photographer</p>
            <div className="mt-2">
              <p className="text-yellow-500 text-sm flex justify-center">
                ★★★★☆ <span className="text-gray-600 ml-2">(1 Review)</span>
              </p>
            </div>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
              distinctio, odio eligendi suscipit reprehenderit atque.
            </p>
          
          </div>

      <div >
          <div className="bg-white p-6 mt-6 border border-gray-300 ">
      <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="flex items-center mb-4">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={300}
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />
            <div>
              <p className="text-sm text-gray-500">{post.date}</p>
              <h4 className="text-gray-800 font-medium">{post.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 mt-6 border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Filter  By Menu</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="flex items-center mb-4">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={300}
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />
            <div>
              <p className="text-sm text-gray-500">{post.date}</p>
              <h4 className="text-gray-800 font-medium">{post.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
          </div>
      </div>
    </div>
  );
}
