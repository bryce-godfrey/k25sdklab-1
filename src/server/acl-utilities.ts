import { GlideRecord, gs } from '@servicenow/glide'

/**
 * Check if the record was created by the current user
 * @param current Current record to compare
 * @returns true if sys_created_by is the current user
 */
export function isCreatedByCurrentUser(current: GlideRecord) {
    return current.getValue('sys_created_by') === gs.getUserID()
}