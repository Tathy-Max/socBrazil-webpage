export enum SelectedPage {
  Home = "home",
  Canais = "canais",
  Blog = "blog",
  Eventos = "eventos",
  FaleConosco = "faleconosco",
}
export interface CanaisType {
  title?: string;
  icon: JSX.Element;
  // description?: string;
}
export interface BlogType {
  name: string;
  description?: string;
  image: string;
}
