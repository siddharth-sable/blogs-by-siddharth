import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Layout.module.css";
import sanityClient from "@/sanityClient";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  return (
    <>
      <section className="bg-white  dark:bg-gray-900">
        <div className=" mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 underline text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Blogs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our blogs will help you build a better and growthful career
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {articles.map((article) => (
              <Link
                href={`/blogs/${article.slug.current}`}
                key={`${article._id}`}
              >
                <article
                  key={`${article._id}`}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-600 text-blue-600 text-xs font-medium inline-flex items-center  py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      ARTICLE
                    </span>
                    <span className="text-sm">
                      {new Date(article.publishedAt).toDateString()}
                    </span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">{article.title}</Link>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {/* <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span> */}
                    </div>
                    <Link
                      href={`/blogs/${article.slug.current}`}
                      className="inline-flex items-center font-medium text-blue-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const articles = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: {
      articles,
    },
  };
}
