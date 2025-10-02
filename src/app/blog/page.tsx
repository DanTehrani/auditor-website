import Header from "@/components/Header";
import Link from "next/link";


const POSTS = [
    {
      slug: 'hello-world',
      title: 'Hello World',
      date: '2025-10-02',
    },
]

type Post=  {
    slug: string;
    title: string;
    date: string;
}

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div key={post.slug}>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6">
      <Header />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="flex flex-col gap-4 mt-6">
        {POSTS.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
        </div>
        </div>
    </div>
  );
};

export default BlogPage;