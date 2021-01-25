import { Alert } from 'react-bootstrap';
import Head from 'next/head';
import SITE_CONFIG from '../lib/site-config';
import { Navbar } from '@/node_modules/react-bootstrap/esm/index';

export default function HomeLayout() {
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Hi, I'm Ian Otto, a Software Engineer with 
            experience in Information Security, DevOps, and Cloud Computing. This is my blog where I catalogue my experiences as a developer."
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
                "Ian Otto - Software Developer"
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
        </Head>
        <Navbar fixed="top" />
        <Alert variant='success'>
            This is a success alert—check it out!
        </Alert>
        </>
    )
}