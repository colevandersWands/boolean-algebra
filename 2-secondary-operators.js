
console.log('%csecondary operators', 'font-weight:bold');

console.log(`
  in boolean algebra there are 3 secondary operations.
  They can be defined in terms of the 3 primary operators.

  Only one of them (equality) is native in JS, 
  so you will not be using them directly in your code.
  but it is good to learn to recognize their replications
`);


  console.log('%cequality:  a === b  ', 'font-style:italics')
    console.log('   native implementation ')
    console.table({
      ['true, true']:    true === true,
      ['true, false']:   true === false,
      ['false, true']:   false === true,
      ['false, false']:  false === false
    })
    console.log('   replication with !, &&, ||')
    console.table({
      ['true, true']:    !((true || true) && !(true && true)),
      ['true, false']:   !((true || false) && !(true && false)),
      ['false, true']:   !((false || true) && !(false && true)),
      ['false, false']:  !((false || false) && !(false && false))
    })

  console.log('%cexclusive or:  a xor b  ', 'font-style:italic')
    console.log('   non-native')
    console.table({
      ['true, true']:    (true || true) && !(true && true),
      ['true, false']:   (true || false) && !(true && false),
      ['false, true']:   (false || true) && !(false && true),
      ['false, false']:  (false || false) && !(false && false)
    })

  console.log('%cimplies:  a -> b  ', 'font-style:italic')
    console.log('   non-native')
    console.table({
      ['true, true']:    !true || true,
      ['true, false']:   !true || false,
      ['false, true']:   !false || true,
      ['false, false']:  !false || false
    })



