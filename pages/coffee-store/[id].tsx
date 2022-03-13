import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return <>Coffe store {router.query.id}</>;
};
export default CoffeeStore;
