import dynamic from "next/dynamic";

import LogIn from "@/components/pages-menu/login";

export const metadata = {
  title: 'Login || workinafrika',
  description:
    'workinafrika',
  
}



const index = () => {
  return (
    <>
      
      <LogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
