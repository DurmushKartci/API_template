"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ders = void 0;
class Ders {
    /// YAPILANDIRICI
    constructor(DersAdi) {
        this.DersAdi = DersAdi;
        /// OZELLİKLERİ
        this.Konular = [];
    }
    /// DAVRANIŞLARI
    /// GETTER
    get_DersAdi() {
        return this.DersAdi;
    }
    get_Konular() {
        return this.Konular;
    }
    get_Konular_index(index) {
        return this.Konular[index];
    }
    /// SETTER
    set_DersAdi(DersAdi) {
        this.DersAdi = DersAdi;
    }
    set_Konular(Konular) {
        this.Konular = Konular;
    }
    add_Konu(Konu) {
        this.Konular.push(Konu);
    }
}
exports.Ders = Ders;
