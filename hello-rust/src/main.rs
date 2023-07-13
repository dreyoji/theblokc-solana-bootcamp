fn main() {

    let x = "Hello";
    let vowel_count = x.chars().filter(|&c| is_vowel(c)).count();
    println!("Vowel count: {}", vowel_count);
}

fn is_vowel(c: char) -> bool {
    match c.to_lowercase().next() {
        Some('a') | Some('e') | Some('i') | Some('o') | Some('u') => true,
        _ => false,
    }
}
