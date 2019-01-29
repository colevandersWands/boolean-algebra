console.log('%c\nCommutativity', 'font-weight:bold')


console.log(`"commutative" means it does not matter on which side of 
an operator you put which variable

Note: because of how JS implements the || operator, 
it is only guarenteed to be commutative if both values are boolean
for the duration of this repo, all values will be boolean
`)

{ console.log('%c\n  || is commutative ', 'font-style:italic');

  const a = (a,b) =>       a || b    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b) =>       b || a    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};

{ console.log('%c\n  && is commutative ', 'font-style:italic');

  const a = (a,b) =>       a && b    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b) =>       b && a    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};