Bandit answers <br />

Bandit 0 - NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL  <br />
Bandit 1 - rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi <br />
Bandit 2 - aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG <br />
Bandit 3 - 2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe <br />
Bandit 4 - lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR               <br />          for x in {0..9}; do file ./-file0$x; done <br />
Bandit 5 - P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU.        <br />              find -type f -size 1033c ! -executable <br />
Bandit 6 - z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S       <br />           find / -user bandit7 -group bandit6 -size 33c 2>/dev/null <br />
Bandit 7 - TESKZC0XvTetK0S9xNwm25STk5iWrBvP      <br />             cat data.txt | grep millionth <br />
Bandit 8 - EN632PlfYiZbn3PhVK3XOGSlNInNE00t      <br />                sort data.txt | uniq -u <br />
Bandit 9 - G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s     <br />                    cat data.txt | strings | grep ^= <br />
Bandit 10 - 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM    <br />            cat data.txt | base64 --decode <br />
Bandit 11 - JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv    <br />        cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]’ <br />
Bandit 12 - wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw <br />
													    mkdir /tmp/pavan <br />
													    cp data.txt /tmp/pavan <br />
													    cd /tmp/pavan <br />
													    ls <br />
													    file data.txt <br />
													    xxd -r data.txt data1 <br />
													    file data1 <br />
													    mv data1 data2.gz <br />
													    gzip -d data2.gz <br />
													    file data2 <br />
													    mv data2 data3.bz2 <br />
													    bzip2 -d data3.bz2 <br />
													    file data3 <br />
													    mv data3 data4.gz <br />
													    gzip -d data4.gz <br />
													    file data4 <br />
													    tar -xvf data4 <br />
													    file data5.bin <br />
													    tar -xvf data5.bin <br />
													    mv data6.bin data7.bz2
													    bzip2 -d data7.bz2 <br />
													    file data7 <br />
													    tar -xvf data7 <br />
													    file data8.bin <br />
													    mv data8.bin data9.gz <br />
													    gzip -d data9.gz <br />
													    file data9 <br />
													    cat data9 <br />
Bandit 13 - ssh bandit14@localhost -2220 -i sshkey.private <br />
Bandit 18 - ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat ~/readme" <br />
Bandit 19 - ls <br />
		    ./bandit20-do <br />
                    ./bandit20-do cat /etc/bandit_pass/bandit20 <br />


Bandit tutorial https://home.adelphi.edu/~ni21347/cybersecgames/OverTheWire/Bandit/index.html <br />
https://www.hackingarticles.in/overthewire-bandit-walkthrough-1-14/ <br />
