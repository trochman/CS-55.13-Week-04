import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import Layout from '../components/layout';
import {getIDs, getOneData} from '../lib/getFamilyData';

export async function getStaticProps({params}){
  let id;
  const dataItem = await getOneData(params.id);
  return {
    props: {
      dataItem
    }
  };
}

export async function getStaticPaths() {
  const dynamicPaths = getIDs();
  return {
    paths: dynamicPaths,
    fallback: false
  };
}

export default function dataEntry({dataItem}) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">Home Page</Link>
        </nav>
      </header>
      <article className="card col-2 center">
        <div className="card-body">
          <h5 className="card-title">{dataItem.name}</h5>
          <Image className="card-img" src={dataItem.image} height={150} width={150} alt={"Picture of" + dataItem.name}></Image>
        </div>
        <div className="list-group center">
          {dataItem.related ?
            <h3>Related Persons</h3>
            : null} 
          {dataItem.related ? 
            dataItem.related.map(
              ({ id, name }) => (
                <Link key={id} href={`/${id}`}>
                  <a className="list-group-item list-group-item-action">{name}</a>
                </Link>
              )
            )
            : null
          }
        </div>
      </article>
    </Layout>
  );
}