import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>WE ARE DENYS, ESHAAN, LUCA, AND JACK.</h1>

        <p className='description'>
          Get started by editing <code>src/pages/index.js</code> to be your
          project home page.
        </p>
        <p className='description2'>
          Next, each team member will create their own about me file in the
          pages directory:{' '}
        </p>
        <code>src/page/teamMemberName.js</code>

        <div className='grid'>
          <a href='/TomHolland ' className='card'>
            <h3>Example About Me Page &rarr;</h3>
            <p>Click here to navigate to an example page</p>
          </a>

          <a
            href='https://github.com/vedant29/Project-CSCI-1000'
            className='card'>
            <h3>Project Resources&rarr;</h3>
            <p>
              Return to the Github for resources on creating your own website!
            </p>
          </a>
          <a
            href='https://nextjs.org/learn/foundations/about-nextjs'
            className='card'>
            <h3>Next.js&rarr;</h3>
            <p>Click here to learn more about Next.js</p>
          </a>
          <a href='https://blog.hubspot.com/website/html' className='card'>
            <h3>HTML and CSS &rarr;</h3>
            <p>Click here to learn more about HTML and CSS</p>
          </a>{' '}
          <a href='https://tailwindcss.com/' className='card'>
            <h3>Tailwind css&rarr;</h3>
            <p>Click here to learn more about tailwind css</p>
          </a>
          <a href='https://styled-components.com/' className='card'>
            <h3>Styled Components&rarr;</h3>
            <p>Click here to learn more about Styled Components</p>
          </a>
          <a href='https://www.netlify.com/' className='card'>
            <h3>Netlify&rarr;</h3>
            <p>Click here to learn more about Netlify to host your website</p>
          </a>
        </div>
      </main>

      <footer>
        <a href='' target='_blank' rel='noopener noreferrer'>
          Copyright CSCI 1000 2023
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .description2 {
          line-height: 1.5;
          font-size: 1.25rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
