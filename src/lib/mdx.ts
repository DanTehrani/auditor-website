import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export async function getPostContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  // Extract front-matter
  // const { content, data } = matter(source);

  // Serialize for MDXRemote
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      format: 'mdx',
    },
    parseFrontmatter: true,
  });

  return { mdxSource };
}
