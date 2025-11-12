import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Users,
  NotebookPen,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      title: "こだわり検索",
      description:
        "雰囲気、移動時間、予算など、リアルな条件で絞り込み。外さないプランが直感的に見つかります。",
      icon: MapPin,
    },
    {
      title: "ストーリーフィード",
      description:
        "コミュニティが投稿する“デート体験記”をチェック。写真付きで当日の空気感まで共有されます。",
      icon: NotebookPen,
    },
    {
      title: "シェアプラン",
      description:
        "お気に入りのルートをワンタップで公開。マップと所要時間が自動生成され、友達とも共有可能。",
      icon: Sparkles,
    },
  ];

  const curatedSpots = [
    {
      area: "恵比寿・代官山",
      title: "キャンドルナイトテラス",
      detail: "19:00~ ワインペアリング / 徒歩3分のギャラリー散歩付き",
    },
    {
      area: "鎌倉・湘南",
      title: "サンセットSUP & 砂浜シネマ",
      detail: "黄金色の夕焼けとポータブルスクリーンで特別な余韻を。",
    },
    {
      area: "京都・東山",
      title: "夜の特別拝観 & 抹茶ナイト",
      detail: "ライトアップされた庭園で静かに語らうプライベートプラン。",
    },
  ];

  const testimonials = [
    {
      name: "Natsu & Yuto",
      note: "“シェアされたプラン通りに動いたら、サプライズ成功率が一気に上がりました。”",
    },
    {
      name: "Miku",
      note: "“スポット保存がスマホの待ち受けみたいに美しくて、毎日のモチベが上がる。”",
    },
  ];

  const stats = [
    { label: "スポット登録", value: "2,400+" },
    { label: "シェアプラン", value: "8,100+" },
    { label: "レビュー満足度", value: "4.9 / 5" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white font-sans text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black dark:text-zinc-50">
      {/* soft focus blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="from-rose-200/40 to-transparent absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b blur-3xl dark:from-rose-500/20" />
        <div className="from-fuchsia-200/40 to-transparent absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-t blur-[120px] dark:from-fuchsia-600/20" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-rose-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-100">
              <Sparkles className="size-4" />
              SHARE DATE SPOTS
            </div>
            <div className="space-y-4">
              <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
                デートスポットの“とっておき”が
                <br />
                すぐに共有できるアプリ。
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                Lumina Dateは、信頼できるコミュニティが厳選した体験をストックし、あなたの大切な時間をアップデートします。
                スポットだけでなく、温度や空気感まで伝わるストーリーフォーマットで、迷わないデート準備を。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-rose-200/60 dark:shadow-rose-500/20"
                size="lg"
                asChild
              >
                <Link href="/list">
                  今すぐスポットを見る
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-zinc-200 bg-white px-6 text-base font-semibold text-zinc-900 dark:border-white/20 dark:bg-white/5 dark:text-white"
                asChild
              >
                <Link href="/new">ベータに参加する</Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-white/90 via-rose-50/80 to-sky-50/90 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:from-zinc-900 dark:via-zinc-900/60 dark:to-zinc-900/30">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">
                curated route
              </p>
              <p className="text-3xl font-semibold leading-snug text-zinc-900 dark:text-white">
                Friday Golden Hour
                <br />
                Route in Tokyo
              </p>
              <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-medium text-zinc-900 shadow-sm dark:bg-white/5 dark:text-white">
                  <MapPin className="size-4 text-rose-500" />
                  17:30 ルーフトップバー (恵比寿)
                </li>
                <li className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-medium text-zinc-900 shadow-sm dark:bg-white/5 dark:text-white">
                  <HeartHandshake className="size-4 text-rose-500" />
                  19:00 手作りフローラル体験 (代官山)
                </li>
                <li className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-medium text-zinc-900 shadow-sm dark:bg-white/5 dark:text-white">
                  <Sparkles className="size-4 text-rose-500" />
                  21:00 ムードライトシネマ (中目黒)
                </li>
              </ul>
              <div className="rounded-2xl border border-white/40 bg-white/70 px-5 py-4 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                プラン投稿者 <span className="font-semibold text-zinc-900 dark:text-white">@shiori</span>{" "}
                のフォロワーが今週だけで 48 件保存。
              </div>
            </div>
            <div className="absolute inset-x-8 bottom-6 flex items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-rose-200">
              LIVE TRENDING
              <span className="text-zinc-400">05:23 更新</span>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
              FEATURE HIGHLIGHTS
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                信頼できる“体験情報”だけが集まる場所。
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-300">
                投稿はすべてコミュニティの承認制。写真、BGM、香りまでを残せるテンプレートで、情緒まで共有できます。
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <feature.icon className="mb-4 size-10 rounded-2xl bg-rose-100 p-2 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200" />
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
              CURATED PICKS
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              今日追加された注目のルート。
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {curatedSpots.map((spot) => (
              <div
                key={spot.title}
                className="group flex flex-col rounded-3xl border border-white/50 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  {spot.area}
                </p>
                <p className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white">
                  {spot.title}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {spot.detail}
                </p>
                <Button
                  variant="ghost"
                  className="mt-6 w-fit gap-1 rounded-full px-0 font-semibold text-rose-600 dark:text-rose-200"
                >
                  プランをみる
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl dark:border-white/10 dark:bg-white/5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
              <Users className="size-4" />
              TRUSTED COMMUNITY
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              こだわり派だけが集まるクローズドコミュニティ。
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              承認制コミュニティとモデレーションにより、二度と“微妙だった”に悩まされません。保存したスポットは自動でマイマップ化され、
              当日の移動も迷わずスマートに。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-zinc-100 bg-white/70 p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-semibold text-zinc-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-zinc-100 bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-400 p-6 text-white shadow-lg">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em]">
                EARLY ACCESS
              </p>
              <p className="text-3xl font-semibold leading-snug text-white">
                先行ユーザー限定で
                <br />
                招待コードを配布中。
              </p>
              <p className="text-sm text-white/80">
                今登録すると、人気クリエイターの限定プランカタログをプレゼント。
                友達紹介でさらにクレジットが追加されます。
              </p>
            </div>
            <div className="space-y-3">
              <Button
                size="lg"
                className="h-12 w-full rounded-2xl border border-white/30 bg-white/90 text-base font-semibold text-rose-600 shadow-lg hover:bg-white"
                asChild
              >
                <Link href="/new">1分で早期登録</Link>
              </Button>
              <p className="text-center text-xs uppercase tracking-[0.3em] text-white/70">
                limited seats weekly
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
