
export const getProducts = async () => {

 try {

  const response = await fetch(
   "https://dummyjson.com/products"
  );

  // API failed check
  if (!response.ok) {
   throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products ?? [];

 } catch (error) {

  console.log("Products API Error:", error);

  return [];
 }

};