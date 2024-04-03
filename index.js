import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

async function init() {
  const supabaseService = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { data, error } = await supabaseService.auth.admin.generateLink({
    type: "signup",
    email: "test@test.com",
    password: "123456",
  });

  console.log(data, error);
}

init();
