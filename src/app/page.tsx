import { getNewsList, isMicroCMSConfigured } from "@/lib/microcms";
import Link from "next/link";

const workflowItems = [
  "Figma MCPでデザイン寸法とトークンを取得",
  "Next.jsコンポーネントへ分解",
  "microCMSのスキーマと型を接続",
  "AIと一緒に差分実装、確認、改善",
];

const fallbackNews = [
  {
    id: "sample-1",
    title: "microCMS接続待ちのサンプル記事",
    excerpt: "環境変数を設定するとmicroCMSのコンテンツに置き換わります。",
  },
  {
    id: "sample-2",
    title: "Figma反映の準備ができています",
    excerpt: "MCPまたは画像書き出しからデザインを読み取り、UIを合わせます。",
  },
];

export default async function Home() {
  const news = await getNewsList({ limit: 3 });
  const newsItems = news.contents.length > 0 ? news.contents : fallbackNews;

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#201b17]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#d6cab8] py-5">
          <Link className="text-xl font-semibold tracking-[0.08em]" href="/">
            Wagou
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#635746] sm:flex">
            <a href="#cms">microCMS</a>
            <a href="#workflow">AI Workflow</a>
            <a href="#next">Next Step</a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#8a4f2f]">
              Figma to Next.js
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Wagouのデザインを、AIと一緒に育てる制作環境へ。
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d5143]">
              Next.js App Router、Tailwind CSS、microCMSを接続するための最初の土台です。
              Figmaの情報が取れ次第、見た目をデザインに寄せていけます。
            </p>
          </div>

          <aside
            id="cms"
            className="border border-[#d6cab8] bg-[#fffaf2] p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#8a4f2f]">
                  microCMS
                </p>
                <h2 className="mt-2 text-2xl font-semibold">News Preview</h2>
              </div>
              <span className="rounded-full border border-[#d6cab8] px-3 py-1 text-xs text-[#635746]">
                {isMicroCMSConfigured ? "connected" : "sample"}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {newsItems.map((item) => (
                <article key={item.id} className="border-t border-[#e4dacb] pt-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  {item.excerpt ? (
                    <p className="mt-2 text-sm leading-6 text-[#635746]">
                      {item.excerpt}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </aside>
        </div>

        <section
          id="workflow"
          className="grid gap-4 border-t border-[#d6cab8] py-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {workflowItems.map((item, index) => (
            <div key={item} className="border-l border-[#d6cab8] pl-5">
              <p className="text-sm text-[#8a4f2f]">0{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-[#453b31]">{item}</p>
            </div>
          ))}
        </section>

        <section id="next" className="pb-12">
          <div className="border border-[#d6cab8] bg-[#201b17] p-6 text-[#fffaf2]">
            <h2 className="text-xl font-semibold">次に必要なもの</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#e8ded0]">
              Figma MCPの利用設定、またはFigmaからの画像・CSS・コンポーネント情報の書き出し。
              microCMS側はサービスドメイン、APIキー、エンドポイント名があれば実データ表示に進めます。
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
