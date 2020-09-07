import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../services/auth-service';


@Pipe ({
  name: 'usernameFilter'

})

export class UserFilterPipe implements PipeTransform {
  transform(users: User[], search: string = ''): User[] {
    if (!search.trim()) {
      return users;
    }
    return users.filter(user => {
      return user.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
