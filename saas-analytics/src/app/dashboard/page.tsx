'use client';

import { useState } from 'react';
import styles from './workspace.module.css';

const accounts = [
  { name: 'Northstar Cloud', sector: 'Cloud infrastructure', score: 94, signal: 'Hiring a revenue operations lead', action: 'Reach out to the VP of Sales about scaling their pipeline.' },
  { name: 'Meridian Labs', sector: 'Developer tools', score: 86, signal: 'Repeated visits to the pricing page', action: 'Offer a walkthrough focused on their evaluation questions.' },
  { name: 'Harbor Systems', sector: 'Enterprise software', score: 72, signal: 'Downloaded the integration guide', action: 'Share the integration checklist and offer technical help.' },
  { name: 'Juniper Works', sector: 'Business services', score: 58, signal: 'Registered for a product webinar', action: 'Follow up with the recording and ask about their goals.' },
];

export default function AccountWorkspace() {
  const [query, setQuery] = useState('');
  const [priorityOnly, setPriorityOnly] = useState(false);
  const [reviewed, setReviewed] = useState<string[]>([]);
  const visible = accounts.filter(({ name, sector, score }) =>
    (name + ' ' + sector).toLowerCase().includes(query.trim().toLowerCase()) &&
    (!priorityOnly || score >= 80)
  );

  return (
    <section className={styles.workspace} aria-labelledby="workspace-title">
      <p className={styles.eyebrow}>Sales intelligence / Demo data</p>
      <h1 id="workspace-title">Account priorities</h1>
      <p>See which accounts are showing buying intent and decide what to do next.</p>

      <dl className={styles.metrics}>
        <div><dt>Tracked accounts</dt><dd>{accounts.length}</dd></div>
        <div><dt>High priority</dt><dd>{accounts.filter(({ score }) => score >= 80).length}</dd></div>
        <div><dt>Reviewed this session</dt><dd>{reviewed.length}</dd></div>
      </dl>

      <div className={styles.toolbar}>
        <label>Search accounts
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Company or industry" />
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" checked={priorityOnly} onChange={(event) => setPriorityOnly(event.target.checked)} />
          High priority only
        </label>
      </div>

      <p role="status">{visible.length} {visible.length === 1 ? 'account' : 'accounts'} shown</p>
      {visible.length === 0 && (
        <div className={styles.card}>
          <p>No accounts match your filters.</p>
          <button onClick={() => { setQuery(''); setPriorityOnly(false); }}>Clear filters</button>
        </div>
      )}
      <ul className={styles.list}>
        {visible.map(({ name, sector, score, signal, action }) => {
          const isReviewed = reviewed.includes(name);
          return (
            <li key={name} className={styles.card}>
              <div className={styles.cardHeading}>
                <div><h2>{name}</h2><p>{sector}</p></div>
                <span className={styles.score}>{score} / 100 · {score >= 80 ? 'High priority' : 'Monitor'}</span>
              </div>
              <p><strong>Buying signal</strong> · {signal}</p>
              <details>
                <summary>Suggested next step</summary>
                <p>{action}</p>
              </details>
              <button aria-pressed={isReviewed} onClick={() => setReviewed((current) =>
                isReviewed ? current.filter((account) => account !== name) : [...current, name]
              )}>Reviewed</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
