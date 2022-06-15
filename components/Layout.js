import Head from "next/head"

export default function Layout(children) {
  return (
    <div>
        <Head>
            <title>Default title in Layout file</title>
            <meta name='description' content = 'Description from Layout'/>
            <meta name='keywords' content = 'Keyword hardcoded in Layout'/>
        </Head>
       <div {...children} />
    </div>
  )
}

Layout.defaultProps = {
    title: 'This is the default title in case the page did not provide one',
    description: 'Default description from Layout',
    keywords: 'Some default keywords'
}