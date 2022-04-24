package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id        uint   `json:"id" gorm:"autoIncrement"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `gorm:"unique" json:"email"`
	//Password  []byte `json:"password"`
	Password string `json:"password"`
}

type PasswordReset struct {
	Id    uint
	Email string
	Token string `gorm:"unique"`
}
