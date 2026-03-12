export default function AdSlot({ zone, className = '' }: { zone: string; className?: string }) {
  return (
    <div className={"ad-slot bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center " + className} data-zone={zone}>
      <div className="text-center py-6 px-4">
        <p className="text-[10px] text-gray-300 uppercase tracking-widest">Iklan</p>
      </div>
    </div>
  );
}
