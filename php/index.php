<?php
$score = 75;

if ($score >= 90 && $score <= 100) {
    echo "Grade: A+";
} elseif ($score >= 85) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B+";
} elseif ($score >= 75) {
    echo "Grade: B";
} elseif ($score >= 70) {
    echo "Grade: C+";
} elseif ($score >= 65) {
    echo "Grade: C";
} elseif ($score >= 60) {
    echo "Grade: D+";
} elseif ($score >= 50) {
    echo "Grade: D";
} elseif ($score < 50) {
    echo "Grade: F (Fail)";
} else {
    echo "Invalid Score";
}
?>