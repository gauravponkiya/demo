import { Injectable } from '@nestjs/common';
import { Cat } from './cats.dto';
import { FileType, DocumentType, FileStatus } from './cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<any> {
   
    const response = { files: this.getDummyDocumentsRecord(10) };
    return response;
  }
  async copyAndMove(body){
    const dummyRecord=this.getDummyDocumentsRecord(1)

    return {
      ...dummyRecord[0],
    }
  }
  getDummyDocumentsRecord(n:number){
    const dummyRecords: any[] = [];
    const fileExtensions = [
      'pdf',
      'doc',
      'docx',
      'xls',
      'xlsx',
      'ppt',
      'pptx',
      'txt',
      'jpg',
      'png',
      'gif',
      'mp4',
    ];
    for (let i = 0; i < 10; i++) {

      const extension =
        fileExtensions[this.getRandomInt(0, fileExtensions.length - 1)];
        const  fileType=Math.random() > 0.5 ? FileType.FILE : FileType.FOLDER;
      const record: any = {
        documentId:i.toString(),
        name: fileType===FileType.FOLDER?`Folder ${this.getRandomInt(0,1000000)}`: `File ${this.getRandomInt(0,1000000)}.${extension}`,
        extension,
        size: 1000,
        type: fileType,
        documentType: DocumentType.ALL,
        createdAt: new Date(),
        updatedAt: new Date(),
        folderId: 'folderId',
        locationId: 'locationId',
        status: FileStatus.COMPLETED,
        contactId: 'contactId',
      };

      dummyRecords.push(record);
    }
    return dummyRecords
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
