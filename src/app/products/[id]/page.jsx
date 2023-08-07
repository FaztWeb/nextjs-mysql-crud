"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

async function loadProduct(productId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/products/" + productId
  );
  return data;
}

async function ProductPage({ params }) {
  const router = useRouter();
  const product = await loadProduct(params.id);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Task deleted");

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
      </div>

      <div className="mt-7 flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
          onClick={() => handleDelete(product.id)}
        >
          delete
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
          onClick={() => router.push("/products/edit/" + product.id)}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default ProductPage;
