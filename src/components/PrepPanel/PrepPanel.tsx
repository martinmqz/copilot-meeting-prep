import { useEffect } from 'react';
import { useMeetingPrepCopilot } from '../../hooks/useMeetingPrepCopilot';

export default function PrepPanel ({ mock = false }) {
  const { summary, loading, fetchPrepData } = useMeetingPrepCopilot({ mock });

  useEffect(() => {
    fetchPrepData();
  }, [fetchPrepData]);

  let content;
  if (loading) {
    content = <p>Loading meeting data...</p>;
  } else if (summary) {
    content = <p>{summary}</p>;
  } else {
    content = <p>No summary available.</p>;
  }

  return (
    <section style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Meeting Prep Summary</h2>
      {content}
    </section>
  )
}
