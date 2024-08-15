// BlogSection.jsx
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    authorName: "Michael Foster",
    authorImageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Apr 20, 2020",
    authorName: "Samantha Lee",
    authorImageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Exploring the future of web development with AI assistance",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "May 5, 2020",
    authorName: "Alex Johnson",
    authorImageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "The rise of serverless architecture in modern applications",
  },
];

const BlogSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-24 lg:px-8 mb-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-4xl font-notos tracking-tight ml-11 text-blue-900 sm:text-5xl ">
          From the Blog
        </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            imageUrl={post.imageUrl}
            date={post.date}
            authorName={post.authorName}
            authorImageUrl={post.authorImageUrl}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
