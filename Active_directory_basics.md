In this room I learned how to manage company using active directory.
Active directory holds all the informationof all of the ''objects'' that exists in the network.
Users: they can authenticated by the domain and can be assigned privileges over resources
Machines: Every computer that joins the active directory domain, a machine object will be created. 
Security groups: we can define user groups and assign access rights to files and other resources.
```
Security Group	Description
Domain Admins	Users of this group have administrative privileges over the entire domain. By default, they can administer any computer on the domain, including the DCs.
Server Operators	Users in this group can administer Domain Controllers. They cannot change any administrative group memberships.
Backup Operators	Users in this group are allowed to access any file, ignoring their permissions. They are used to perform backups of data on computers.
Account Operators	Users in this group can create or modify other accounts in the domain.
Domain Users	Includes all existing user accounts in the domain.
Domain Computers	Includes all existing computers in the domain.
Domain Controllers	Includes all existing DCs on the domain.
```
