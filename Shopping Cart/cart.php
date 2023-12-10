<?php
session_start();

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

function addToCart($productId, $quantity = 1) {
    $_SESSION['cart'][$productId] = isset($_SESSION['cart'][$productId])
        ? $_SESSION['cart'][$productId] + $quantity
        : $quantity;
}

function removeFromCart($productId) {
    if (isset($_SESSION['cart'][$productId])) {
        unset($_SESSION['cart'][$productId]);
    }
}

function clearCart() {
    $_SESSION['cart'] = [];
}
?>
