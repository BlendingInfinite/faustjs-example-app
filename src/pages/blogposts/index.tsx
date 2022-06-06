import Head from 'next/head';
import { Header, Footer } from 'components';
import { client } from 'client';
import BlogpostCard from 'components/blogposts/BlogpostCard';

export default function Blogposts() {
  const { useQuery } = client;
  const { generalSettings } = client.useQuery();
  const blogposts = useQuery().blogposts()?.nodes;
  console.log(blogposts);

  return (
    <div>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className='content content-single'>
        <div className='wrap'>
          <h2>Blogposts</h2>
          {blogposts.map((blogpost) => (
            <BlogpostCard key={blogpost.id} blogpost={blogpost} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </div>
  );
}
