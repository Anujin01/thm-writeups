# Active Directory Basics

In this room, I learned how to manage an enterprise environment using **Active Directory (AD)**. Active Directory acts as a centralized database that holds all the information for **objects** existing within the network. 

### Key Active Directory Objects

*   **Users:** Authenticated by the domain and assigned specific privileges over network resources.
*   **Machines:** Every computer that joins the Active Directory domain. A corresponding machine object is automatically created in the directory.
*   **Security Groups:** Collections of user accounts or computers used to define and assign access rights to files, folders, and other network resources efficiently.

### Built-in Security Groups & Descriptions

| Security Group | Description |
| :--- | :--- |
| **Domain Admins** | Users with administrative privileges over the entire domain. By default, they can administer any computer on the domain, including Domain Controllers (DCs). |
| **Server Operators** | Users who can administer Domain Controllers (e.g., locking/unlocking, backing up, shutting down). They cannot change administrative group memberships. |
| **Backup Operators** | Users allowed to access any file on the system, overriding existing file permissions, specifically to perform data backups and restorations. |
| **Account Operators** | Users who can create, modify, or delete user accounts, groups, and OUs in the domain (excluding administrative accounts). |
| **Domain Users** | Automatically includes all existing user accounts within the domain. |
| **Domain Computers** | Automatically includes all workstations and servers joined to the domain. |
| **Domain Controllers** | Includes all Domain Controllers running in the domain. |

---

## AD Management & Delegation

We use the **Active Directory Users and Computers (ADUC)** console on Windows to manage and organize our **Organizational Units (OUs)**. This allows us to apply specific rules, enforce policies, and manage permissions by assigning objects into groups.

One of the biggest advantages of using AD is **Delegation of Control**, which allows domain administrators to grant specific users or groups the privileges to perform advanced tasks on certain OUs without giving them full administrative rights.

### Example: Password Reset Delegation

In the example below, a user named `phillip` has been delegated the rights to reset user passwords within the Sales OU. This allows him to reset `sophie`'s password:

```powershell
PS C:\Users\phillip> Set-ADAccountPassword sophie -Reset -NewPassword (Read-Host -AsSecureString -Prompt 'New Password') -Verbose
New Password: *********
VERBOSE: Performing the operation "Set-ADAccountPassword" on target "CN=Sophie,OU=Sales,OU=THM,DC=thm,DC=local".
