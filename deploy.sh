#!/bin/bash

cd cloud_code
b4a configure accountkey
#expect "Account Key: "
#send "1MAD8DtSnE3eED5Hae6VmDPp6egOG6YiEWAPGT66"
  #- b4a new
b4a deploy
cd ..