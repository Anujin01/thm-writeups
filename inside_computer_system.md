# Computer fundamentals - TryHackMe

**Date:** 5/07/2026

**Path:** Pre-Security

## What This Room Covered

In this room, I explored fundamental computer hardwares and systems. Starting with motherboard to how it boot up

## Terms i learned

```motherboard - holds all the different components and connects them

CPU - processor that continuously executes instructions

RAM - temporary holds datas

SSDs HDDs - long term storage drives

network adapter - lets computer communicates with other systems

PSU - provides power to all components

graphic cards - outputs visual data

```

## What Actually Clicked

Once the power button is pressed, the system firmware(BIOS/UEFI) starts and runs POST(power on self test) to ensure
hardware like the CPU and RAM are connected and functioning, then looks for a bootable device based on a set 
priorities. The bootloader is then executed, which loads the OS kernel into the RAM, officially starting up the 
software environment.
