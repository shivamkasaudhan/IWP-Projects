<?php
include 'products.php';
include 'cart.php';

// Handle add to cart action
if (isset($_GET['action']) && $_GET['action'] == 'add' && isset($_GET['id'])) {
    $productId = intval($_GET['id']);
    addToCart($productId);
}

// Handle remove from cart action
if (isset($_GET['action']) && $_GET['action'] == 'remove' && isset($_GET['id'])) {
    $productId = intval($_GET['id']);
    removeFromCart($productId);
}

// Handle clear cart action
if (isset($_GET['action']) && $_GET['action'] == 'clear') {
    clearCart();
}

// Display products
echo '<h2>Product List</h2>';
foreach ($products as $product) {
    echo "<p>{$product['name']} - \${$product['price']} ";
    echo "<a href='index.php?action=add&id={$product['id']}'>Add to Cart</a></p>";
}

// Display cart
echo '<h2>Shopping Cart</h2>';
if (empty($_SESSION['cart'])) {
    echo '<p>Your cart is empty.</p>';
} else {
    echo '<ul>';
    foreach ($_SESSION['cart'] as $productId => $quantity) {
        $product = $products[$productId - 1]; // Assuming product IDs start from 1
        echo "<li>{$product['name']} - Quantity: $quantity ";
        echo "<a href='index.php?action=remove&id={$product['id']}'>Remove</a></li>";
    }
    echo '</ul>';
    echo '<p><a href="index.php?action=clear">Clear Cart</a></p>';
}
?>
