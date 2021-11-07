function findPrimeToAThousand() {
    for (let i = 0; i < 1000; i++) {
        let isPrime = i <= 1 ? false : true

        for (let j = 2; j < i; j++) {
            if (i % j === 0) isPrime = false
        }

        isPrime ? console.log(i + " is a prime number!") : false
    }
}

findPrimeToAThousand()

/* OUTPUT:

2 is a prime number!
3 is a prime number!
5 is a prime number!
7 is a prime number!
11 is a prime number!
13 is a prime number!
17 is a prime number!
19 is a prime number!
23 is a prime number!
29 is a prime number!
31 is a prime number!
37 is a prime number!
41 is a prime number!
43 is a prime number!
47 is a prime number!
53 is a prime number!
59 is a prime number!
61 is a prime number!
67 is a prime number!
71 is a prime number!
73 is a prime number!
79 is a prime number!
83 is a prime number!
89 is a prime number!
97 is a prime number!
101 is a prime number!
103 is a prime number!
107 is a prime number!
109 is a prime number!
113 is a prime number!
127 is a prime number!
131 is a prime number!
137 is a prime number!
139 is a prime number!
149 is a prime number!
151 is a prime number!
157 is a prime number!
163 is a prime number!
167 is a prime number!
173 is a prime number!
179 is a prime number!
181 is a prime number!
191 is a prime number!
193 is a prime number!
197 is a prime number!
199 is a prime number!
211 is a prime number!
223 is a prime number!
227 is a prime number!
229 is a prime number!
233 is a prime number!
239 is a prime number!
241 is a prime number!
251 is a prime number!
257 is a prime number!
263 is a prime number!
269 is a prime number!
271 is a prime number!
277 is a prime number!
281 is a prime number!
283 is a prime number!
293 is a prime number!
307 is a prime number!
311 is a prime number!
313 is a prime number!
317 is a prime number!
331 is a prime number!
337 is a prime number!
347 is a prime number!
349 is a prime number!
353 is a prime number!
359 is a prime number!
367 is a prime number!
373 is a prime number!
379 is a prime number!
383 is a prime number!
389 is a prime number!
397 is a prime number!
401 is a prime number!
409 is a prime number!
419 is a prime number!
421 is a prime number!
431 is a prime number!
433 is a prime number!
439 is a prime number!
443 is a prime number!
449 is a prime number!
457 is a prime number!
461 is a prime number!
463 is a prime number!
467 is a prime number!
479 is a prime number!
487 is a prime number!
491 is a prime number!
499 is a prime number!
503 is a prime number!
509 is a prime number!
521 is a prime number!
523 is a prime number!
541 is a prime number!
547 is a prime number!
557 is a prime number!
563 is a prime number!
569 is a prime number!
571 is a prime number!
577 is a prime number!
587 is a prime number!
593 is a prime number!
599 is a prime number!
601 is a prime number!
607 is a prime number!
613 is a prime number!
617 is a prime number!
619 is a prime number!
631 is a prime number!
641 is a prime number!
643 is a prime number!
647 is a prime number!
653 is a prime number!
659 is a prime number!
661 is a prime number!
673 is a prime number!
677 is a prime number!
683 is a prime number!
691 is a prime number!
701 is a prime number!
709 is a prime number!
719 is a prime number!
727 is a prime number!
733 is a prime number!
739 is a prime number!
743 is a prime number!
751 is a prime number!
757 is a prime number!
761 is a prime number!
769 is a prime number!
773 is a prime number!
787 is a prime number!
797 is a prime number!
809 is a prime number!
811 is a prime number!
821 is a prime number!
823 is a prime number!
827 is a prime number!
829 is a prime number!
839 is a prime number!
853 is a prime number!
857 is a prime number!
859 is a prime number!
863 is a prime number!
877 is a prime number!
881 is a prime number!
883 is a prime number!
887 is a prime number!
907 is a prime number!
911 is a prime number!
919 is a prime number!
929 is a prime number!
937 is a prime number!
941 is a prime number!
947 is a prime number!
953 is a prime number!
967 is a prime number!
971 is a prime number!
977 is a prime number!
983 is a prime number!
991 is a prime number!
997 is a prime number!

*/