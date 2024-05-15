'use server'
import axios from "@/config/axiosTb";
import { AxiosResponse } from "axios";
import { redirect } from "next/navigation";
import createSupabaseServerClient from "@/lib/supabase/server";
import { revalidatePath,unstable_noStore as noStore } from "next/cache";

type ResponseData = {
  token: string;
  refreshToken: string;
};

type LoginResult = {
  token?: string;
  refreshToken?: string;
  error?: Error;
};


//THINGSBOARD
export async function loginTb(): Promise<LoginResult> {
  try {
    const username = process.env.TB_USERNAME;
    const password = process.env.TB_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "The environment variables for the username and password are not defined."
      );
    }

    const responseLogin: AxiosResponse<ResponseData> = await axios.post(
      `/api/auth/login`,
      {
        username,
        password,
      }
    );

    const { token, refreshToken } = responseLogin.data;
    return { token, refreshToken };
  } catch (error) {
    return { error: error as Error };
  }
}

//SETTING

export async function createSetting(data: {
  entityType: string;
  entityId: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("entropy")
    .insert({
      entityType: data.entityType,
      entityId: data.entityId
    })
    .single();
  
    revalidatePath("/")
  return result;
}

export async function readSetting() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.from("entropy").select("*").order("created_at", { ascending: false }).limit(1);
}

//AUTH

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return result;
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return result;
}

export async function signOut(){
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/auth')
}

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
