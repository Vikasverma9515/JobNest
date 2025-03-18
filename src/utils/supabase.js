
import { A } from "@clerk/clerk-react/dist/useAuth-D8LsVKFe";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


const SupabaseClient = async(supabaseAccessToken)=>{
  const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
    },
  },
});
return supabase;
};

export default SupabaseClient;
