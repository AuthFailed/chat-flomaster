import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from '@astrojs/vercel/serverless';
import {reportErrorPlugin} from './src/plugins/reportError.ts';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  site: "https://flomaster.chrsnv.ru",
  base: "/",

  integrations: [
    starlight({
      title: "Фломастер",
      logo: {
        src: "/src/assets/flomaster.png",
      },
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      customCss: ["/src/styles/custom.css"],
      social: {
        github: "https://github.com/AuthFailed/flomaster/",
        telegram: "https://t.me/+jH1mblw0ytcwOWUy",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "🏠 Главная",
          link: "/",
        },
        { label: "🤔Что это такое?", link: "/chat-phrases" },
        {
          label: "🛠️Технические вопросы",
          items: [
            { slug: "chat-phrases/tech/internet" },
            { slug: "chat-phrases/tech/television" },
            { slug: "chat-phrases/tech/intercom" },
            { slug: "chat-phrases/tech/applications" },
          ],
        },
        {
          label: "💸 Абонентские вопросы",
          items: [
            { slug: "chat-phrases/abon/money" },
            { slug: "chat-phrases/abon/promotions" },
            { slug: "chat-phrases/abon/tariffs" },
          ],
        },
        {
          label: "💭 Диалог",
          items: [
            { slug: "chat-phrases/dialog/greetings" },
            { slug: "chat-phrases/dialog/parting" },
            { slug: "chat-phrases/dialog/selfservice" },
            { slug: "chat-phrases/dialog/legal" },
            { slug: "chat-phrases/dialog/negative" },
          ],
        },
        {
          label: "🛒 Продажи",
          items: [
            { slug: "chat-phrases/sales/routers" },
            { slug: "chat-phrases/sales/decoders" },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/authfailed/flomaster/edit/main/",
      },
      expressiveCode: {
        plugins: [
          reportErrorPlugin()
        ],
        styleOverrides: {
          borderRadius: '0.5rem',
          frames: {
            shadowColor: '#124',
          },
        },
      }
    }),
  ],
});
