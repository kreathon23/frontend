export interface Material {
  type:               string;
  examples:           string;
  description:        string;
  code:               number;
}

export interface FetchResults {
  productName:        string;
  productDescription: string;
  packagingType:      string;
  productImage:       string;
  barcode:            string;
  price:              number;
  materials:          Material[] | null;
  isRecyclable:       boolean;
  recommendations:    FetchResults[];
  productScore:       number;
}