package handlers

import (
	"fmt"
)

type Page struct {
	Name string
}

func (p Page) Path() string {
	return fmt.Sprintf("webapp/pages/%s.html", p.Name);
}