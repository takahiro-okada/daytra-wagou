import {
  createClient,
  type MicroCMSImage,
  type MicroCMSListContent,
  type MicroCMSQueries,
} from "microcms-js-sdk";

export type News = MicroCMSListContent & {
  title: string;
  excerpt?: string;
  body?: string;
  eyecatch?: MicroCMSImage;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

export const isMicroCMSConfigured = Boolean(serviceDomain && apiKey);

export const client = isMicroCMSConfigured
  ? createClient({
      serviceDomain: serviceDomain as string,
      apiKey: apiKey as string,
    })
  : null;

export async function getNewsList(queries?: MicroCMSQueries) {
  if (!client) {
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: queries?.limit ?? 10,
    };
  }

  return client.getList<News>({
    endpoint: process.env.MICROCMS_NEWS_ENDPOINT ?? "news",
    queries,
  });
}
