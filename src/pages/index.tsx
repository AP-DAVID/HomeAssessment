import Layout from '@/components/Layout';
import Content from '@/features/Content';
import Hero from '@/features/Hero';


export default function Home() {
  return (
    <Layout>
      <main className={` font-sans max-w-[1500px] w-full px-2 mx-auto`}>
        <Hero />
        <Content />
      </main>
    </Layout>
  );
}
