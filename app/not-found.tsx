

export default function NotFound() {
    return (
        <section className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                404
            </p>
            <h1 className="text-5xl font-bold tracking-tight">Page not found</h1>
            <p className="max-w-md text-lg leading-relaxed text-neutral-600">
                The page you are looking for does not exist or has moved.
            </p>
        </section>
    );
}
