import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout'
import HomeLayout from '../components/home-layout';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <HomeLayout/>
  )
}