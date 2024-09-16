'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

type SurveyResponse = {
  id: number;
  created_at: string;
  [key: string]: any;
};

const SurveyResponses = () => {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('survey_responses')
        .select('*');

      if (error) {
        console.error('Error fetching responses:', error);
      } else {
        setResponses(data || []);
      }
      setLoading(false);
    };

    fetchResponses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Survey Responses</h2>
      {responses.map((response) => (
        <div key={response.id} className="border p-2 mb-2">
          <p><strong>Response ID:</strong> {response.id}</p>
          <p><strong>Submitted at:</strong> {new Date(response.created_at).toLocaleString()}</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default SurveyResponses;
