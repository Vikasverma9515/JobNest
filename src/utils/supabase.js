
// // import { A } from "@clerk/clerk-react/dist/useAuth-D8LsVKFe";
// // import { createClient, SupabaseClient } from "@supabase/supabase-js";

// // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// // const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


// // const supabaseClient = async(supabaseAccessToken)=>{
// //   const supabase = createClient(supabaseUrl, supabaseKey, {
// //   global: {
// //     headers: {
// //         Authorization: `Bearer ${supabaseAccessToken}`,
// //     },
// //   },
// // });
// // return supabase;
// // };

// // export default SupabaseClient;

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// const supabaseClient = async (supabaseAccessToken) => {
//     return createClient(supabaseUrl, supabaseKey, {
//         global: {
//             headers: supabaseAccessToken
//                 ? { Authorization: `Bearer ${supabaseAccessToken}` }
//                 : {},
//         },
//     });
// };

// export default supabaseClient;


import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  });
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default supabaseClient;
export const getSupabaseClient = async (accessToken) => {
  return await supabaseClient(accessToken);
};

