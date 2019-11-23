export class produit {
    constructor(private _id: number, private _libelle: string, private _image: string, private _prix: number, private _stock: boolean) { }
    public get id(): number { return this._id; }
    public set id(mat: number) { this.id = mat; }

    public get libelle(): string { return this._libelle; }
    public set libelle(ch: string) { this._libelle = ch; }

    public get image(): string { return this._image; }
    public set image(img: string) { this._image = img; }

    public get prix(): number { return this._prix; }
    public set prix(p: number) { this._prix = p; }

    public get stock(): boolean { return this._stock; }
    /*pour dire s'il est en stock ou non*/
    public set stock(b: boolean) { this._stock = b; }
/* champ de date */
}