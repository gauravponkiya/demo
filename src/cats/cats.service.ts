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
    const dummyRecords: any[] = [];

    for (let i = 0; i < 20; i++) {
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
      const extension =
        fileExtensions[this.getRandomInt(0, fileExtensions.length - 1)];
      const record: any = {
        documentId:i,
        name: `File ${i}.${extension}`,
        extension,
        size: 1000,
        type: Math.random() > 0.5 ? FileType.FILE : FileType.FOLDER,
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
    const response = { files: dummyRecords };
    await this.wait(5000);
    return response;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
