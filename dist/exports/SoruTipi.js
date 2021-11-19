"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoruTipi = void 0;
class SoruTipi {
    /// OZELLIKLER
    /// YAPILANDIRICI
    constructor(Dersler, Konular, SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu) {
        this.Dersler = Dersler;
        this.Konular = Konular;
        this.SoruYazisi = SoruYazisi;
        this.SoruDegiskenleri = SoruDegiskenleri;
        this.Siklar = Siklar;
        this.CevapFormulu = CevapFormulu;
    }
    /// DAVRANISLARI
    soru_tipi_cozumu() {
        return this.CevapFormulu;
    }
    /// GETTER
    get_Dersler() {
        return this.Dersler;
    }
    get_Konular() {
        return this.Konular;
    }
    get_SoruYazisi() {
        return this.SoruYazisi;
    }
    get_SoruDegiskenleri() {
        return this.SoruDegiskenleri;
    }
    get_Siklar() {
        return this.Siklar;
    }
    get_CevapFormulu() {
        return this.CevapFormulu;
    }
    /// SETTER
    set_Dersler(Dersler) {
        this.Dersler = Dersler;
    }
    add_Ders(Ders) {
        this.Dersler.push(Ders);
    }
    set_Konular(Konular) {
        this.Konular = Konular;
    }
    add_Konu(Konu) {
        this.Konular.push(Konu);
    }
    set_SoruYazisi(SoruYazisi) {
        this.SoruYazisi = SoruYazisi;
    }
    set_SoruDegiskenleri(SoruDegiskenleri) {
        this.SoruDegiskenleri = SoruDegiskenleri;
    }
    add_SoruDegiskeni(add_SoruDegiskeni) {
        this.SoruDegiskenleri.push(add_SoruDegiskeni);
    }
    set_Siklar(Siklar) {
        this.Siklar = Siklar;
    }
    add_Option(option) {
        this.Siklar.push(option);
    }
}
exports.SoruTipi = SoruTipi;
