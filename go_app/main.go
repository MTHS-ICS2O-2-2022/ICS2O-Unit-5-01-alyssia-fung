package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	secretNumber := rand.Intn(6)
	var guess int
	tries := 0

	fmt.Println("I'm thinking of a number between 1 and 6. Can you guess it?")
	for {
		fmt.Print("Your guess: ")
		_, err := fmt.Scanf("%d", &guess)
		if err != nil {
			fmt.Println("Invalid input. Please enter a number.")
			continue
		}
		tries++
		if guess < secretNumber {
			fmt.Println("you guessed wrong! Try again.")
		} else {
			fmt.Printf("Congratulations! You guessed the secret number in %d tries.\n", tries)
			break
			
			fmt.Println("\nDone.")
		}
	}
}
