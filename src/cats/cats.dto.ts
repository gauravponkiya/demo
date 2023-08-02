import { IsString, IsInt } from 'class-validator';
export class Cat {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  breed: string;
}


export interface ICreateDocumentRequest {
  name: string;
  size: number;
  type: FileType;
  documentType: DocumentType;
  contentType: string;
  folderId?: string;
  contactId: string;
  locationId: string;
}
export interface IFileMetadata {
  name: string;
  extension: FileType;
  size: number;
  type: FileType;
  documentType: DocumentType;
  createdAt: Date;
  updatedAt: Date;
  folderId: string;
  locationId: string;
  status: FileStatus;
  contactId: string;
}

export interface ICreateDocumentResponse extends IFileMetadata {
  url: string;
}

export interface ISearchDocumentsResponse {
  files: IFileMetadata[];
}

export interface ISearchDocumentQuery {
  searchText?: string;
  contactId: string;
  locationId: string;
  documentType: DocumentType;
  skip?: number;
  limit?: number;
  type?: FileType;
  currentFolderId?: string;
}
export enum FileType {
  FILE = 'file',
  FOLDER = 'folder',
}
export enum DocumentType {
  INTERNAL = 'internal',
  SENT = 'sent',
  RECEIVED = 'received',
  ALL = 'all',
}
export enum FileStatus {
  FAILED = 'failed',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
}
export enum DirectoryType {
  'ROOT' = 'root',
  'FOLDER' = 'folder',
}
