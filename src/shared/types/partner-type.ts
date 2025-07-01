export interface IPartnerAttr {
  id: string;
  fullname: string;
  adress: string;
  balance: number;
  isActive: boolean;
  location: {
    lat: number;
    lng: number;
  };
  phone: string[]; // array of phone numbers
  pin: boolean;
  role: string; // restricts to literal type
  user: {
    fname: string;
    lname: string;
  };
  userId: string;
}
