export enum SelectedPage {
  Home = "home",
  Canais = "canais",
  Blog = "blog",
  Eventos = "eventos",
  FaleConosco = "faleconosco",
}
export interface CanaisType {
  icon: JSX.Element;
  title?: string;
  description?: string;
}
export interface BlogType {
  name: string;
  description?: string;
  image: string;
}
