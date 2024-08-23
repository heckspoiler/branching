import { createClient } from '@supabase/supabase-js';

export default async function Notes() {
  const supabase = createClient('supabaseUrl', 'supabaseKey');
  const { data: notes } = await supabase.from('notes').select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
