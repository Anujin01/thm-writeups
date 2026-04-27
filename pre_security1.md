# network fundamentals Part 1 — TryHackMe

**Date:** 4/26/2026
**Path:** Pre-Security

## What This Room Covered
Extending your network — introduction to port forwarding, firewalls, vpn basics, LAN networking devices

## Terms i learned
firewall - security guard, monitors ingoing and outgoing traffics based on predefined rules
router - traffic controlled usen in WAN
switch - internal connector used in LAN
vpn - secure tunnel 
ports forwarding - specific rule on router

## What Actually Clicked
When we communicate over the internet, several devices and protocols work together. Our device first
connects to a switch (local) and a router (gateway). To ensure a stable connection, a TCP three-way
handshake is performed. Port numbers act as the final 'room numbers' to direct traffic to the correct
application on a server. Finally, we use VPNs to wrap this entire process in an encrypted tunnel for 
secure remote access

## What Confused Me
Port forwarding vs Ports
Ports exists on every device whereas Port forwarding is a specific rule set on router
TCP three-way hanshake purpose
I thought it was for intergrity(which is handled by checksums or SSL/TSL) but is about reliability
and connection establishment

