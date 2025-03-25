FILES = extension.js metadata.json
ZIP_FILE = extension.zip

all: zip

zip:
	cd src && zip -r ../$(ZIP_FILE) $(FILES)

install: zip
	gnome-extensions install $(ZIP_FILE)

clean:
	rm -f $(ZIP_FILE)
