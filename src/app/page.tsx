import Image from "next/image";
import Link from "next/link"; // 追加

export default function Home() {
  // 写真、ヘッドライン、説明のセットを含む配列
  const items = [
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "最初のヘッドライン",
      description: "最初の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "二番目のヘッドライン",
      description: "二番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "三番目のヘッドライン",
      description: "三番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "四番目のヘッドライン",
      description: "四番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "五番目のヘッドライン",
      description: "五番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "六番目のヘッドライン",
      description: "六番目の説明文です。このテキストはサンプルです。",
    },
    // 他のセットを追加
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-8">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={{
            pathname: "/details",
            query: item, // ここでitemのデータをクエリパラメータとして渡す
          }}
          passHref
        >
          <div className="flex flex-col items-center space-y-4">
            <Image src={item.imageUrl} width={300} height={300} alt="画像の説明" />
            <div className="space-y-2 w-full max-w-72">
              <h2 className="text-xl font-bold">{item.headline}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
