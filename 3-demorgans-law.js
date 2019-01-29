console.log('%c\nDe Morgan\'s Law', 'font-weight:bold')

console.log(`
this law describes how negation distrubtes over || and &&
`)

{ console.log('\n%c  ! distributes over ||', 'font-style:italic');

  const a = (a,b) =>       !(a || b)     ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b) =>        !a && !b     ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};


{ console.log('%c\n  ! distributes over &&', 'font-style:italic');

  const a = (a,b) =>       !(a && b)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b) =>        !a || !b    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};


{ console.log('%c\n  ! distributes over multiple ||', 'font-style:italic');

  const a = (a,b,c) =>       !(a || b || c)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       (!a && !b && !c)     ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};


{ console.log('%c\n  ! distributes over multiple &&', 'font-style:italic');

  const a = (a,b,c) =>        !(a && b && c)    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       (!a || !b || !c)     ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};