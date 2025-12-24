import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
}

export function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
    return (
        <Card className="group transition-all hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a href={link} className="flex-1" target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm" className="w-full">
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            View
                        </Button>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                            <Github className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
