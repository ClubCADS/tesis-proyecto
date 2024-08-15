import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const supabase = createClient();
  const surveyData = await request.json();

  const { error } = await supabase
    .from('survey_responses') // Asegúrate de que el nombre de la tabla es correcto
    .insert([surveyData]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: 'Survey saved successfully' }, { status: 200 });
}
