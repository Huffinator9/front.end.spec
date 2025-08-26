//src: src/types.ts

export interface Task {
   id: string;
   title: string;
   description?: string;
   completed: boolean;
}

export interface AuthUser {
   email: string;
   name?: string;
   sub: string;
}