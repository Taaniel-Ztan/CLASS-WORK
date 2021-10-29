function balanced(tähed) {
    let x=0, y=0;
    for (let täht of tähed) {
       if (täht == 'x')
         x++;
      if (täht == 'y')
         y++;
    }
    return x == y
}
