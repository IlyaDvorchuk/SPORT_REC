import {Component, ErrorInfo, ReactNode, Suspense} from "react";

type ErrorBoundaryProps = {
    children: ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean,
    errorInfo?: string
}

export class ErrorBoundary extends
    Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: ''
        };
    }

    static getDerivedStateFromError(error: Error) {
        console.table(error.name, [error.message])
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return {
            hasError: true,
            errorInfo: error.message
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    resetError = () => {
        this.setState({ hasError: false });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback={''}>
                    <div>Ой.. Произошла ошибка. Мои извинения</div>
                </Suspense>
        )
        }
        return this.props.children;
    }
}
