import { Product, ProductWithMarketAndSizeMap } from "./interfaces";
import { GetAskPriceResponse, GetBidPriceResponse, GetSalesResponse } from "./interfaces/Price";
interface Scraper {
    searchProducts(query: string): Promise<Array<Product>>;
    fetchProductDetails(query: string): Promise<ProductWithMarketAndSizeMap>;
    fetchApiKey(query: string): Promise<string>;
    fetchAskPrices(query: string): Promise<GetAskPriceResponse>;
    fetchBidPrices(query: string): Promise<GetBidPriceResponse>;
    fetchSales(query: string): Promise<GetSalesResponse>;
}
export declare class StockXScraper implements Scraper {
    searchProducts(query: string): Promise<Array<Product>>;
    fetchProductDetails(query: string): Promise<ProductWithMarketAndSizeMap>;
    fetchApiKey(): Promise<string>;
    fetchAskPrices(query: string): Promise<GetAskPriceResponse>;
    fetchBidPrices(query: string): Promise<GetBidPriceResponse>;
    fetchSales(query: string): Promise<GetBidPriceResponse>;
}
export {};
