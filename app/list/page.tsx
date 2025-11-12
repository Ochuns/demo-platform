import { createClient } from "@/utils/supabase/server";

const Page = () => {
  const supabase = createClient();
  const {data} = supabase.from("places").select("*");


  return (
    <div>page</div>
  )
}

export default Page
