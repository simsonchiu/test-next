import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results.js";
import requests from "../utils/requests.js";

// This gets rendered on the client
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

// Server Side rendering (only this page)
// This portion happens first
// Build the page on server and send over all of the data at once.
// Great for SEO and google getting alll the data at once.
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const url = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchAction.url
  }`;
  const request = await fetch(url).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
