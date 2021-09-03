"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockXScraper = void 0;
const fetchApiKey_1 = __importDefault(require("./apis/fetchApiKey"));
const fetchAskPrices_1 = __importDefault(require("./apis/fetchAskPrices"));
const fetchBidPrices_1 = __importDefault(require("./apis/fetchBidPrices"));
const fetchProductDetails_1 = __importDefault(require("./apis/fetchProductDetails"));
const fetchSales_1 = __importDefault(require("./apis/fetchSales"));
const searchProducts_1 = __importDefault(require("./apis/searchProducts"));
class StockXScraper {
    async searchProducts(query) {
        return (0, searchProducts_1.default)(query);
    }
    async fetchProductDetails(query) {
        return (0, fetchProductDetails_1.default)(query);
    }
    async fetchApiKey() {
        return (0, fetchApiKey_1.default)();
    }
    async fetchAskPrices(query) {
        return (0, fetchAskPrices_1.default)(query);
    }
    async fetchBidPrices(query) {
        return (0, fetchBidPrices_1.default)(query);
    }
    async fetchSales(query) {
        return (0, fetchSales_1.default)(query);
    }
}
exports.StockXScraper = StockXScraper;
