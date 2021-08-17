import { Injectable } from "@angular/core";
import { v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGenerateIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix){
      throw Error('Prefix can not be empty');
    }
    const u = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${u}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
