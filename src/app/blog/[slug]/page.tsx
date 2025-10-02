import { getPostContent } from '@/lib/mdx';
import MdxRenderer from '@/components/MdxRenderer';
import Header from '@/components/Header';

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const { mdxSource } = await getPostContent(params.slug);

  return (
    <div className="min-h-screen bg-gray-50 px-6">
      <Header />
      <article className="markdown prose mx-auto py-10 max-w-3xl">
        <div className="text-2xl font-bold">
          {mdxSource.frontmatter?.title as string}
        </div>
        <MdxRenderer source={mdxSource} />
      </article>
    </div>
  );
}
