'use client'
import { useSearchParams } from 'next/navigation';
import Image from "next/image";

export default function Details() {
  const router = useSearchParams();
  const imageUrl = router.get("imageUrl");
  const headline = router.get("headline");
  const description = router.get("description");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{headline}</h1>
      <Image src={imageUrl as string} width={300} height={300} alt="画像の説明" />
      <p>{description}</p>
    </div>
  );
}
