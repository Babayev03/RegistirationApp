Bandit answers

Bandit 0 - NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL
Bandit 1 - rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi
Bandit 2 - aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG
Bandit 3 - 2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe
Bandit 4 - lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR                        for x in {0..9}; do file ./-file0$x; done
Bandit 5 - P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU.                     find -type f -size 1033c ! -executable
Bandit 6 - z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S                 find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
Bandit 7 - TESKZC0XvTetK0S9xNwm25STk5iWrBvP                  cat data.txt | grep millionth
Bandit 8 - EN632PlfYiZbn3PhVK3XOGSlNInNE00t                     sort data.txt | uniq -u
Bandit 9 - G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s                        cat data.txt | strings | grep ^=
Bandit 10 - 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM               cat data.txt | base64 --decode
Bandit 11 - JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv           cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]’
Bandit 12 - wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw
													    mkdir /tmp/pavan
													    cp data.txt /tmp/pavan
													    cd /tmp/pavan
													    ls
													    file data.txt
													    xxd -r data.txt data1
													    file data1
													    mv data1 data2.gz
													    gzip -d data2.gz
													    file data2
													    mv data2 data3.bz2
													    bzip2 -d data3.bz2
													    file data3
													    mv data3 data4.gz
													    gzip -d data4.gz
													    file data4
													    tar -xvf data4
													    file data5.bin
													    tar -xvf data5.bin
													    file data6.bin														
													    mv data6.bin data7.bz2
													    bzip2 -d data7.bz2
													    file data7
													    tar -xvf data7
													    file data8.bin
													    mv data8.bin data9.gz
													    gzip -d data9.gz
													    file data9
													    cat data9
Bandit 13 - ssh bandit14@localhost -2220 -i sshkey.private
Bandit 18 - ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat ~/readme"
Bandit 19 - ls
		    ./bandit20-do
                    ./bandit20-do cat /etc/bandit_pass/bandit20


Bandit tutorial https://home.adelphi.edu/~ni21347/cybersecgames/OverTheWire/Bandit/index.html
https://www.hackingarticles.in/overthewire-bandit-walkthrough-1-14/
