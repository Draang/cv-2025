export default function Card({ children }: React.PropsWithChildren) {
  return (
    <div className="items-start justify-start overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black/15 to-gray-950/10 px-4 py-8 shadow-2xl space-y-2 hover:scale-105 duration-500">
      {children}
    </div>
  );
}
