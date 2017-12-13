import { IGroupMember } from "./groupMember.model";

/**
 * Represents a single group that a user has either created or has joined.
 */
export interface IGroup {
  /**
   * It may be nice to have a distinction between members of a group
   * that have been invited versus members of the group that have not confirmed
   * they want to join the group.
   */
  invitedGroupMembers: IGroupMember[];
  /**
   * same comment as 'invitedGroupMembers'.
   */
  confirmedGroupMembers: IGroupMember[];
  /**
   * The amount of money that is being put on the line by
   * each group member.
   */
  moneyOnTheLine: number;
}
