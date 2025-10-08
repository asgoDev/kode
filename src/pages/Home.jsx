export default function Home() {
  return (
    <div className="text-white-md grid grid-rows-[1fr_1fr]">
      <section className="grid place-items-center text-5xl font-bold">
        500$
      </section>
      <section className="grid grid-rows-[100px_100px] grid-cols-[1fr_1fr] gap-2 content-end">
        <article className="bg-gray-button border border-muted col-span-2 rounded-lg"></article>
        <article className="bg-gray-button border border-muted rounded-lg"></article>
        <article className="bg-gray-button border border-muted rounded-lg"></article>
      </section>
    </div>
  );
}
