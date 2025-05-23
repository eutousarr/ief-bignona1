export interface Eleve {
  id: number;
  updatedAt: Date;
  matricule: string;
  nom: string;
  prenom: string;
  sexe: string;
  datenais: Date | null;
  lieunais: string | null;
  adresse: string | null;
  email: string | null;
  phone: string | null;
  photo: string | null;
  notes: Array<{
    trimestre: string;
    id: number;
    eleveId: number;
    annee: string;
    evaluationId: number;
    matiereId: number;
    score: number;
  }>;
  resultats: {id:number, total: number; moyenne: number; rang: number, eleveId: number, evaluationId: number }[];

}
