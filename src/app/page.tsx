import { getNewsList, isMicroCMSConfigured } from "@/lib/microcms";
import { SiteChrome } from "@/components/layout/site-chrome";

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
    <>
      <SiteChrome />
      <main
        className="min-h-screen bg-wagou-base-body text-wagou-contrast"
        id="main-content"
      >
        <section
          className="mx-auto flex min-h-screen w-full max-w-[1320px] flex-col px-6 pb-6 pt-24 sm:px-10 lg:pl-[240px] lg:pr-16 lg:pt-6"
          id="about"
        >
          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-wagou-accent">
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
              className="border border-wagou-border/35 bg-wagou-white p-6 shadow-wagou-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-wagou-accent">
                    microCMS
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">News Preview</h2>
                </div>
                <span className="rounded-full border border-wagou-border/35 px-3 py-1 text-xs text-wagou-contrast/70">
                  {isMicroCMSConfigured ? "connected" : "sample"}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {newsItems.map((item) => (
                  <article
                    key={item.id}
                    className="border-t border-wagou-border/25 pt-4"
                  >
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    {item.excerpt ? (
                      <p className="mt-2 text-sm leading-6 text-wagou-contrast/70">
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
            className="grid gap-4 border-t border-wagou-border/35 py-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {workflowItems.map((item, index) => (
              <div key={item} className="border-l border-wagou-border/35 pl-5">
                <p className="text-sm text-wagou-accent">0{index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-wagou-contrast/80">
                  {item}
                </p>
              </div>
            ))}
          </section>

          <section className="pb-12" id="reservation">
            <div className="border border-wagou-border/35 bg-wagou-contrast p-6 text-wagou-base-body">
              <h2 className="text-xl font-semibold">次に必要なもの</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-wagou-base-body/80">
                Figma MCPの利用設定、またはFigmaからの画像・CSS・コンポーネント情報の書き出し。
                microCMS側はサービスドメイン、APIキー、エンドポイント名があれば実データ表示に進めます。
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
