package pl.szczypkowski.spotitunes.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.szczypkowski.spotitunes.entity.Track;
@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface TrackRepo extends MongoRepository<Track,String> {
}
