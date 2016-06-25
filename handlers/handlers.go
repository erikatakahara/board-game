package handlers

import (
	"html/template"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	err := Render(w, Page{"home"})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func Render(w http.ResponseWriter, page Page) error {
	data := struct {
		Page Page
	}{
		page,
	}

	t := template.Must(template.ParseFiles("webapp/templates/base.html", page.Path()))
	err := t.Execute(w, data)
	return err
}