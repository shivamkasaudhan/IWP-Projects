# (a) Create an array with 10 elements
my @myArray = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

# (b) Print the highest index of the array
my $highestIndex = $#myArray;
print "Highest Index: $highestIndex\n";

# (c) Assign beyond the end of the array, to an element at index 20
$myArray[20] = 42;

# (d) Save the current highest index in a scalar, and print it
$highestIndex = $#myArray;
print "New Highest Index: $highestIndex\n";

# (e) Set the array size to 5 elements (index 4)
$#myArray = 4;

# (f) Print the array
print "Array after resizing: @myArray\n";

# (g) Set the array size back to the previous size (using the scalar created in (d))
$#myArray = $highestIndex;

# (h) Print the array
print "Array after restoring size: @myArray\n";
