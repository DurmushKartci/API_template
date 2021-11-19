"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Konu = void 0;
const SoruTipi_1 = require("./SoruTipi");
class Konu {
    /// YAPILANDIRICI
    constructor(Ders, KonuAdi) {
        this.Ders = Ders;
        this.KonuAdi = KonuAdi;
        /// OZELLIKLER
        this.SoruTipleri = [];
    }
    /// DAVRANISLARI
    // Bu konuya ait olan bütün soru tiplerini döndür
    soru_tipleri_ver() {
        return this.SoruTipleri;
    }
    // Bu konuya ait olan soru tiplerinden, indexe ait olan soru tipini döndür
    soru_tipi_ver(index) {
        return this.SoruTipleri[index];
    }
    // Şimdilik tek bir soru tipi oluşturuluyor
    // Soru tipi oluştur ve sorutipleri arrayine ekle
    soru_tipi_olustur(SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu) {
        this.SoruTipleri = [new SoruTipi_1.SoruTipi([this.Ders], [this], SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu)];
    }
    /// GETTER
    get_Ders() {
        return this.Ders;
    }
    get_KonuAdi() {
        return this.KonuAdi;
    }
    get_SoruTipleri() {
        return this.SoruTipleri;
    }
    get_SoruTipleri_index(index) {
        return this.SoruTipleri[index];
    }
    /// SETTER
    set_Ders(Ders) {
        this.Ders = Ders;
    }
    set_KonuAdi(KonuAdi) {
        this.KonuAdi = KonuAdi;
    }
    set_SoruTipleri(SoruTipleri) {
        this.SoruTipleri = SoruTipleri;
    }
    add_SoruTipi(SoruTipi) {
        this.SoruTipleri.push(SoruTipi);
    }
}
exports.Konu = Konu;
