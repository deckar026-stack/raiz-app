import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jkrcowkfopynwunvxlcx.supabase.co'
const supabaseKey = 'sb_publishable_KG-LqHyVUDc4dMekFWKzlA_ZA42Ms4g'

export const supabase = createClient(supabaseUrl, supabaseKey)