import axios from "axios";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

function ProductPage({ product }) {
  return (
    <Layout>
      <pre>{JSON.stringify(product)}</pre>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
