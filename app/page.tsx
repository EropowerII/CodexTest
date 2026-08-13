export default function Home() {
  return (
    <main className="test-page">
      <section className="test-card" aria-labelledby="test-heading">
        <span className="status-dot" aria-hidden="true" />
        <p className="eyebrow">Connection check</p>
        <h1 id="test-heading">This is a TEST</h1>
        <p className="subtitle">Your GitHub workflow is ready to go.</p>
      </section>
    </main>
  );
}
