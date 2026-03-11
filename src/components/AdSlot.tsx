import { useEffect, useRef } from 'react';

interface AdSlotProps {
  zone: string;
  type: 'banner' | 'inpage' | 'vast';
  className?: string;
}

export default function AdSlot({ zone, type, className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !adRef.current) return;
    loaded.current = true;
    
    // HilltopAds integration placeholder
    // In production, this would load the actual ad script
    try {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-zone', zone);
      script.setAttribute('data-type', type);
      // script.src = `//d2p6ckj28uskl3.cloudfront.net/z/${zone}.js`;
      // adRef.current.appendChild(script);
    } catch (e) {
      // Silent fail for ad loading
    }
  }, [zone, type]);

  if (type === 'vast') return null; // VAST ads are overlay-based

  return (
    <div ref={adRef} className={`ad-container flex items-center justify-center ${className}`} data-ad-zone={zone}>
      <div className="text-center py-6 px-4">
        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <p className="text-[10px] text-gray-300 uppercase tracking-widest">Iklan</p>
      </div>
    </div>
  );
}

export function PopunderAd() {
  useEffect(() => {
    // Popunder ad - loads once per session
    // Zone: 6850949 / 6851053
    try {
      // In production: load popunder script
      // const script = document.createElement('script');
      // script.src = '//d2p6ckj28uskl3.cloudfront.net/z/6850949.js';
      // document.head.appendChild(script);
    } catch (e) {
      // Silent
    }
  }, []);
  return null;
}
