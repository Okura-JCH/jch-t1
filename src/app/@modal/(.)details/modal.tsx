'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  // オーバーレイがクリックされたときに onDismiss を呼び出す
  function handleOverlayClick() {
    onDismiss();
  }

  return (
    <dialog ref={dialogRef} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center modal rounded-lg bg-white shadow-xl transition-opacity" onClose={onDismiss}>
      {/* オーバーレイ要素 */}
      <div className="fixed inset-0" onClick={handleOverlayClick}></div>
      {/* モーダルのコンテンツをこの div 内に配置 */}
      <div className="relative z-10 rounded-lg p-5 bg-white shadow-xl">
        {children}
      </div>
    </dialog>
  );
}
