export type UserType = 'patient' | 'doctor';

export interface User {
  id: string;
  user_type: UserType;
  full_name: string;
  email: string;
  phone_number: string;
  password_hash: string;
  auth_method: string;
  last_login_at: Date;
}

export interface Patient extends User {
  date_of_birth: Date;
  gender: string;
  medical_history: string;
  allergies: string;
  blood_type: string;
}

export interface Doctor extends User {
  medical_license_number: string;
  specialization: string;
  experience_years: number;
  available_schedule: Date[];
  doctor_rating: number;
  location: string;
}

export interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  appointment_datetime: Date;
  appointment_status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  appointment_notes: string;
}

export interface ChatMessage {
  id: string;
  sender_id: string;
  receiver_id: string;
  message_text: string;
  sent_at: Date;
  file_url?: string;
}

export interface VideoSession {
  id: string;
  room_id: string;
  participant_ids: string[];
  session_start_at: Date;
  session_end_at: Date;
}

export interface Payment {
  id: string;
  user_id: string;
  amount: number;
  payment_method: string;
  payment_status: 'pending' | 'paid' | 'failed';
  invoice_url: string;
}

export interface ForumThread {
  id: string;
  thread_title: string;
  author_id: string;
  post_content: string;
  posted_at: Date;
  comment_ids: string[];
}

export interface ScreeningResult {
  id: string;
  screening_id: string;
  user_id: string;
  risk_diabetes: number;
  risk_hypertension: number;
  risk_heart_disease: number;
  risk_respiratory: number;
  risk_cancer: number;
  risk_level: 'low' | 'medium' | 'high';
  ml_model_version: string;
  screened_at: Date;
  screening_recommendation: string;
}
