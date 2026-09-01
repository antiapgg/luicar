export interface ProductItem {
  id: string;
  name: string;
  category: 'Todos' | 'Repostería' | 'Chocolates' | 'Productos gallegos' | 'Quesos' | 'Miel' | 'Navidad' | 'Regalos';
  weightOrUnit: string;
  price: string;
  profitEstimated?: string;
  description?: string;
  image: string;
  badge?: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  schoolName: string;
  gradeOrGroup: string;
  studentsCount: number | '';
  cityOrTown: string;
  notes?: string;
}

export interface StepProcess {
  number: number;
  title: string;
  description: string;
  badgeColor: string;
  accentColor: string;
  image: string;
  imageAlt: string;
}
