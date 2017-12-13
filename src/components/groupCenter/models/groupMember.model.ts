/**
 * This is a group that a user belongs to.
 * For now, each user is only allowed to be in one
 * group at a time (easier for the initial prototype).
 */

export interface IGroupMember {
  /**
   * TODO: what will be the unique identifier for a user?
   *  - phone number?
   *  - email?
   */
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
