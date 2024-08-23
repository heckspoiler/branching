import Image from 'next/image';
import styles from './page.module.css';
import InputField from './components/InputField/InputField';

import { createClient } from '@supabase/supabase-js';

export default async function Home() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.from('projects').select('*');

  console.log(data);

  return (
    <main className={styles.main}>
      <InputField />
    </main>
  );
}
