# How the web works - TryHackMe

**Date:** 4/27/2026

**Path:** Pre-Security

## What This Room Covered

How our system uses DNS and what other record types used in connecting servers.

## Terms i learned

A record - it resolves domain name into IPv4P address

AAAA record - resolves domain name into IPv6 address

CName - resolves subdomain to main domain name

MX record - resolves IP adresses of the mail servers for a domain

TXT record - any text based data can restored and ensures integrity and ownership in emails
using 'SPF', 'DKIM', and 'DMARC'

### Domain hierarchy (example: www.github.com)

root domain (.)

top level domain(TLD) - 1. ccTLD(country code top level domain): .mn, .ca, .usa, .uk  
                        2.gTLD(generic top level domain): .com(commercial purposes), .edu(educational purposes)

second level domain (SLD) - registering domain names (github.)

subdomain (www.)

## What Actually Clicked

When we enter a human readable domain names into search bar, the DNS resolver uses 'A' or 'AAAA' records
to translate it into machine readable IP address

## What Confused Me

CNAME (Canonical Name)
The Clarification: Think of a CNAME as an alias. It doesn't point to an IP address; 
it points to another domain name.

Example: You have blog.github.com (alias) pointing to github.github.io (canonical name).
When the computer sees the CNAME, it says, "Oh, you want the IP for this other guy instead,"
and goes to look that one up.

Key Rule: You generally cannot have a CNAME for a root domain (like github.com), only for 
subdomains (like www or blog).

TXT Records
The Clarification: These are "sticky notes" for a domain. They don't help route traffic, 
but they provide information to services that need it.

Email Security: Services like Gmail check your TXT records to see if the server sending an
email is "authorized" to do so. If the TXT record (SPF/DKIM) matches, the email isn't marked as spam.
