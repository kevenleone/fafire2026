class SearchBuilder {
    and() {
        return this;
    }

    or(key: string, value: string) {
        return this;
    }

    static eq(key: string, value: string) {
        return `${key} eq '${value}'`
    }

    eq(key: string, value: string) {
        return this;
    }

    ne(key: string, value: string) {
        return this;
    }

    ge(key: string, value: string) {
        return this;
    }

    gt(key: string, value: string) {
        return this;
    }

    lt(key: string, value: string) {
        return this;
    }

    contains(key: string, value: string) {
        return this;
    }

    build() {
        return ""
    }
}

const searchBuilder = new SearchBuilder();

searchBuilder
    .ne('HotelName', 'Sea View Motel')
    .and()
    .ge("LastRenovationDate", new Date().toISOString())
    .build()

console.log(SearchBuilder.eq('HotelName', 'Sea View Motel')
   