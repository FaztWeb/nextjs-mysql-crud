"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useParams } from "next/navigation";

export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const { data } = await axios.get("/api/products/" + id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (params?.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params?.id) {
        await axios.put("/api/products/" + params.id, {
          name: product.name,
          description: product.description,
          price: product.price,
        });

        toast.success("Task Updated", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/products", product);

        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChange}
            value={product.name}
            autoComplete="off"
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Product Price:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="price"
            placeholder="10.00"
            onChange={handleChange}
            value={product.price}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="description"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Write a Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            onChange={handleChange}
            value={product.description}
          ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {params?.id ? "Update Product" : "Save Product"}
        </button>
      </form>
    </div>
  );
}
