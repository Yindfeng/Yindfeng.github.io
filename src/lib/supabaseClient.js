import { createClient } from '@supabase/supabase-js';

// Only browser-safe publishable/anon keys belong in PUBLIC_ variables.
const url = (import.meta.env.PUBLIC_SUPABASE_URL || '').trim();
const key = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '').trim();
export const supabase = url && key ? createClient(url, key) : null;
