import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xhmzqwwcjeaqhprmwlbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobXpxd3djamVhcWhwcm13bGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5Mzc4NTYsImV4cCI6MjA2NTUxMzg1Nn0.QJXE4YceRp6Yz3cdjaAcYQ02H1IL3dQPOUytxeJIH3I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
