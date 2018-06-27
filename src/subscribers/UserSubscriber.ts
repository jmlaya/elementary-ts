import { EventSubscriber, EntitySubscriberInterface, UpdateEvent, InsertEvent } from "typeorm";
import { User } from "../entitites/User";
import { hashSha256 } from "../lib/CryptoUtils";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    beforeUpdate(event: UpdateEvent<User>) {
        if(event.databaseEntity.password !== event.entity.password){
            event.entity.password = hashSha256(event.entity.password);
        }
    }

    beforeInsert(event: InsertEvent<User>){
        event.entity.password = hashSha256(event.entity.password);
    }

}
