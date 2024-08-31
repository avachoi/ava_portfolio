import React from "react";
import avaNote from "../assets/projects/avaNote.png";
import covid19 from "../assets/projects/covid19.png";
import fitMate from "../assets/projects/fitMate.png";
import mealMaster from "../assets/projects/mealMaster.png";

export default function Projects() {
	return (
		<div className="bg-bg-grey p-6">
			<h2 className="text-xl ">Projects</h2>
			<div>
				<img src={fitMate} alt="fitMate" className="rounded-lg my-6" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					libero veniam magni officia dicta earum ea, sapiente iusto
					exercitationem, repudiandae id doloremque, tenetur rerum officiis sit.
					Vel tempore quam itaque?
				</p>
				<div>
					<a href="https://github.com/avachoi/fit_mate">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
					<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">video</a>
				</div>
			</div>
			<div>
				<img src={avaNote} alt="avaNote" className="rounded-lg my-6" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					libero veniam magni officia dicta earum ea, sapiente iusto
					exercitationem, repudiandae id doloremque, tenetur rerum officiis sit.
					Vel tempore quam itaque?
				</p>
				<div>
					<a href="https://github.com/avachoi/fit_mate">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
					<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">video</a>
				</div>
			</div>
			<div>
				<img src={mealMaster} alt="mealMaster" className="rounded-lg my-6" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					libero veniam magni officia dicta earum ea, sapiente iusto
					exercitationem, repudiandae id doloremque, tenetur rerum officiis sit.
					Vel tempore quam itaque?
				</p>
				<div>
					<a href="https://github.com/avachoi/fit_mate">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
					<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">video</a>
				</div>
			</div>
			<div>
				<img src={covid19} alt="covid19" className="rounded-lg my-6" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					libero veniam magni officia dicta earum ea, sapiente iusto
					exercitationem, repudiandae id doloremque, tenetur rerum officiis sit.
					Vel tempore quam itaque?
				</p>
				<div>
					<a href="https://github.com/avachoi/fit_mate">github</a>
					<a href="https://fit-mate.onrender.com/">live</a>
					<a href="https://www.youtube.com/watch?v=1KGj6t7K0jU">video</a>
				</div>
			</div>
		</div>
	);
}
