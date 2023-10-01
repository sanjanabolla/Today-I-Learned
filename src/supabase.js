import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fmzhitvkgqktugtghhhv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtemhpdHZrZ3FrdHVndGdoaGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNDI1NjksImV4cCI6MjAxMDgxODU2OX0.o1X0HXZ9Wu4_4UDSa3czESze59nImGleLlz767QggaQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
