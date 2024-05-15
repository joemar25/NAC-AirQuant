"use client";
import { useEffect, useState } from "react";
import createSupabaseClientClient from "@/lib/supabase/client";
import { unstable_noStore as noStore } from "next/cache";

export async function readUserSession() {
  noStore();
  const supabase = await createSupabaseClientClient();
  return supabase.auth.getSession();
}

export function useGetUserSB() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { error, data } = await readUserSession();
        setUserInfo(data);
      } catch (err) {
        setError(error);
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  return { userInfo, error };
}
