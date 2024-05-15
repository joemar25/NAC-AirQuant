// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useTransition } from "react";
// import { Icons } from "@/components/icons";
// import { toast } from "../ui/use-toast";

// import createSupabaseClientClient from "@/lib/supabase/client";

// export async function signInWithOAuthGitHub() {
//   const supabase = await createSupabaseClientClient();
//   const result = await supabase.auth.signInWithOAuth({
//     provider: "github",
//     options: {
//       redirectTo: `${location.origin}/auth/callback`,
//     },
//   });
//   return result;
// }

// export default function OAuthForm() {



//   async function loginWithGithub() {
//       const result = await signInWithOAuthGitHub();
//       const { error } = result;

//       if (error?.message) {
//         console.log(error.message);
//         toast({
//           variant: "destructive",
//           title: "You submitted the following values:",
//           description: (
//             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//               <code className="text-white">{error.message}</code>
//             </pre>
//           ),
//         });
//       } else {
//         console.log("succes");
//         toast({
//           title: "You submitted the following values:",
//           description: (
//             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//               <code className="text-white">Successfully Login</code>
//             </pre>
//           ),
//         });
//       }
//   }

//   return (
//     <Button className="w-full" onClick={loginWithGithub}>
//       Login With Github
// 			<Icons.gitHub className="h-6 w-6 mx-3"/>
//     </Button>
//   );
// }
